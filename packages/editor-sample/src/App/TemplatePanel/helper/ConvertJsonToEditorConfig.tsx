import { TEditorConfiguration } from "../../../documents/editor/core";

/**
 * Convert raw JSON to TEditorConfiguration format
 * This ensures the JSON structure matches what the editor expects
 */
export function convertJsonToEditorConfig(json: any): TEditorConfiguration {
  console.log('Converting JSON to TEditorConfiguration:', json);
  
  // If it's already in the correct format, return as-is
  if (json && typeof json === 'object' && json.root) {
    console.log('JSON already appears to be in TEditorConfiguration format');
    return json as TEditorConfiguration;
  }

  // If it's a malformed or empty object, create a basic template
  if (!json || typeof json !== 'object' || Object.keys(json).length === 0) {
    console.log('Creating basic template from empty/invalid JSON');
    return createBasicTemplate();
  }

  // Try to fix common structural issues
  try {
    const fixed: Record<string, any> = {};
    
    // Ensure root exists and has proper structure
    if (!json.root) {
      console.log('No root found, creating default root');
      fixed.root = {
        type: 'EmailLayout',
        data: {
          backdropColor: '#FFFFFF',
          canvasColor: '#FFFFFF',
          textColor: '#03124A',
          fontFamily: 'GEOMETRIC_SANS',
          childrenIds: [],
        },
      };
    } else {
      fixed.root = validateAndFixBlock(json.root, 'EmailLayout');
    }

    // Process all other blocks
    Object.keys(json).forEach(key => {
      if (key !== 'root') {
        const block = json[key];
        if (block && typeof block === 'object') {
          fixed[key] = validateAndFixBlock(block);
          
          // Add to root children if not already there
          if (!fixed.root.data.childrenIds.includes(key)) {
            fixed.root.data.childrenIds.push(key);
          }
        }
      }
    });

    // If no children blocks were found, create a basic text block
    if (fixed.root.data.childrenIds.length === 0) {
      const textBlockId = generateBlockId();
      fixed.root.data.childrenIds = [textBlockId];
      
      fixed[textBlockId] = {
        type: 'Text',
        data: {
          style: getDefaultStyle(),
          props: {
            text: 'Your email content goes here',
          },
        },
      };
    }

    console.log('Converted JSON to TEditorConfiguration:', fixed);
    return fixed as TEditorConfiguration;
    
  } catch (error) {
    console.error('Error converting JSON, creating basic template:', error);
    return createBasicTemplate();
  }
}

/**
 * Validate and fix a block to ensure it has the correct structure
 */
function validateAndFixBlock(block: any, expectedType?: string): any {
  const fixed: any = {
    type: block.type || expectedType || 'Text',
    data: {
      style: { ...getDefaultStyle(), ...(block.data?.style || {}) },
      props: { ...(block.data?.props || {}) },
    },
  };

  // Fix specific block types
  switch (fixed.type) {
    case 'EmailLayout':
      fixed.data = {
        backdropColor: block.data?.backdropColor || '#FFFFFF',
        canvasColor: block.data?.canvasColor || '#FFFFFF',
        textColor: block.data?.textColor || '#03124A',
        fontFamily: block.data?.fontFamily || 'GEOMETRIC_SANS',
        childrenIds: Array.isArray(block.data?.childrenIds) ? block.data.childrenIds : [],
      };
      break;

    case 'Container':
      fixed.data.props.childrenIds = Array.isArray(block.data?.props?.childrenIds) 
        ? block.data.props.childrenIds 
        : [];
      break;

    case 'ColumnsContainer':
      fixed.data.props.columns = Array.isArray(block.data?.props?.columns)
        ? block.data.props.columns
        : [];
      fixed.data.props.columnsCount = block.data?.props?.columnsCount || 2;
      break;

    case 'Heading':
      fixed.data.props.level = block.data?.props?.level || 'h2';
      fixed.data.props.text = block.data?.props?.text || 'Heading';
      break;

    case 'Text':
      fixed.data.props.text = block.data?.props?.text || 'Text content';
      break;

    case 'Button':
      fixed.data.props = {
        buttonBackgroundColor: block.data?.props?.buttonBackgroundColor || '#03124A',
        buttonStyle: block.data?.props?.buttonStyle || 'rounded',
        buttonTextColor: block.data?.props?.buttonTextColor || '#FFFFFF',
        fullWidth: block.data?.props?.fullWidth || false,
        size: block.data?.props?.size || 'large',
        text: block.data?.props?.text || 'Button',
        url: block.data?.props?.url || '#',
        ...block.data?.props,
      };
      break;

    case 'Image':
      fixed.data.props = {
        url: block.data?.props?.url || 'https://placehold.co/600x400@2x/F8F8F8/CCC?text=Your%20image',
        alt: block.data?.props?.alt || 'Image',
        contentAlignment: block.data?.props?.contentAlignment || 'middle',
        ...block.data?.props,
      };
      break;

    case 'Divider':
      fixed.data.props = {
        lineHeight: block.data?.props?.lineHeight || 1,
        lineColor: block.data?.props?.lineColor || '#EEEEEE',
        ...block.data?.props,
      };
      break;

    case 'Avatar':
      fixed.data.props = {
        size: block.data?.props?.size || 64,
        shape: block.data?.props?.shape || 'circle',
        imageUrl: block.data?.props?.imageUrl || 'https://ui-avatars.com/api/?size=128&name=User',
        alt: block.data?.props?.alt || 'Avatar',
        ...block.data?.props,
      };
      break;
  }

  return fixed;
}

/**
 * Get default style object
 */
function getDefaultStyle(): any {
  return {
    color: null,
    backgroundColor: null,
    fontSize: 16,
    fontFamily: null,
    fontWeight: 'normal',
    textAlign: 'left',
    padding: {
      top: 16,
      bottom: 16,
      left: 24,
      right: 24,
    },
  };
}

/**
 * Generate a random block ID
 */
function generateBlockId(): string {
  return `block_${Math.random().toString(36).substring(2, 15)}`;
}

/**
 * Create a basic template with minimal content
 */
function createBasicTemplate(): TEditorConfiguration {
  const textBlockId = generateBlockId();
  
  return {
    root: {
      type: 'EmailLayout',
      data: {
        backdropColor: '#FFFFFF',
        canvasColor: '#FFFFFF',
        textColor: '#03124A',
        fontFamily: 'GEOMETRIC_SANS',
        childrenIds: [textBlockId],
      },
    },
    [textBlockId]: {
      type: 'Text',
      data: {
        style: getDefaultStyle(),
        props: {
          text: 'Welcome to your email template! Start editing to create amazing emails.',
        },
      },
    },
  };
}