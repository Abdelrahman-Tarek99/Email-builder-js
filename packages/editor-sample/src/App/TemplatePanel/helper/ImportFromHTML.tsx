import { TEditorBlock, TEditorConfiguration } from "../../../documents/editor/core";


export function importFromHtml(html: string): TEditorConfiguration {
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, "text/html");

  const blocks: TEditorConfiguration = {};

  function walk(node: Node): string | null {
    if (node.nodeType === Node.TEXT_NODE) {
      const text = node.textContent?.trim();
      if (text) {
        const id = generateId();
        blocks[id] = {
          type: "Text",
          data: {
            props: {
              text,
            },
          },
        } as TEditorBlock;
        return id;
      }
      return null;
    }

    if (node.nodeType !== Node.ELEMENT_NODE) return null;
    const el = node as HTMLElement;

    let type: TEditorBlock["type"] = "Text";
    let props: any = {};
    let slots: { children?: string[] } = {};

    switch (el.tagName.toLowerCase()) {
      case "p":
        type = "Text";
        props.text = el.innerText;
        break;

      case "h1":
      case "h2":
      case "h3":
      case "h4":
      case "h5":
      case "h6":
        type = "Heading";
        props.text = el.innerText;
        props.level = parseInt(el.tagName[1]);
        break;

      case "div":
        type = "Container";
        break;

      case "img":
        type = "Image";
        props.url = el.getAttribute("src") ?? "";
        props.alt = el.getAttribute("alt") ?? "";
        break;

      default:
        // fallback: skip
        return null;
    }

    const children: string[] = [];
    el.childNodes.forEach((child) => {
      const childId = walk(child);
      if (childId) children.push(childId);
    });

    if (children.length > 0) {
      slots.children = children;
    }

    const id = generateId();
    blocks[id] = {
      type,
      data: {
        props,
        ...(Object.keys(slots).length ? { slots } : {}),
      },
    } as TEditorBlock;

    return id;
  }

  // Root block is always EmailLayout
  const rootId = "root";
  const rootChildren: string[] = [];

  doc.body.childNodes.forEach((node) => {
    const childId = walk(node);
    if (childId) rootChildren.push(childId);
  });

  blocks[rootId] = {
    type: "EmailLayout",
    data: {
      props: {},
      slots: {
        children: rootChildren,
      },
    },
  } as TEditorBlock;

  return blocks;
}

function generateId() {
  return Math.random().toString(36).substr(2, 9);
}
