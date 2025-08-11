// Debug/Testing version - COMPLETELY DISABLED to prevent interference
import React from 'react';
import { Box, Typography } from '@mui/material';

// CRITICAL: These flags prevent ALL interference with the JavaScript version
const DEBUG_MODE = false; // Keep FALSE for production
const BLOCK_ALL_MESSAGES = true; // Keep TRUE to prevent interference
const DISABLE_COMPONENT = true; // Additional safety - completely disables this component

interface MessageData {
  type: string;
  payload?: any;
}

console.log('🔍 CHILD TSX: TypeScript file loaded - COMPLETELY DISABLED');
console.log('🔍 TSX Config: DEBUG_MODE:', DEBUG_MODE, 'BLOCKED:', BLOCK_ALL_MESSAGES, 'DISABLED:', DISABLE_COMPONENT);

export default function TemplatePanel() {
  // Component ID for identification
  const componentId = Math.random().toString(36).substr(2, 9);

  // If component is disabled, show minimal safe UI
  if (DISABLE_COMPONENT) {
    return (
      <Box sx={{ p: 2, bgcolor: 'success.light', borderRadius: 1, border: '2px solid green' }}>
        <Typography variant="h6" color="success.dark">
          ✅ TypeScript Component Safely Disabled
        </Typography>
        <Typography variant="body2" color="success.dark">
          This component is completely disabled and will not interfere with the JavaScript email builder.
        </Typography>
        <Typography variant="caption" display="block" sx={{ mt: 1, fontFamily: 'monospace' }}>
          TSX Component ID: {componentId} | Status: Completely Disabled
        </Typography>
        <Typography variant="body2" sx={{ mt: 2, p: 1, bgcolor: 'success.dark', color: 'white', borderRadius: 1 }}>
          <strong>✅ Configuration is correct:</strong><br/>
          • JavaScript (.js) file handles all email building<br/>
          • TypeScript (.tsx) file is safely disabled<br/>
          • No message conflicts or interference<br/>
          • Save functionality should work properly
        </Typography>
      </Box>
    );
  }

  // This code should never execute due to DISABLE_COMPONENT = true
  return (
    <Box sx={{ p: 3, bgcolor: 'error.light', borderRadius: 1, border: '2px solid red' }}>
      <Typography variant="h6" color="error.dark">
        ❌ TypeScript Component Should Be Disabled
      </Typography>
      <Typography variant="body2" color="error.dark">
        This component should not be active. Set DISABLE_COMPONENT = true at the top of this file.
      </Typography>
      <Typography variant="caption" display="block" sx={{ mt: 1 }}>
        Component ID: {componentId}
      </Typography>
      <Typography variant="body2" sx={{ mt: 2, p: 2, bgcolor: 'error.dark', color: 'white', borderRadius: 1 }}>
        <strong>⚠️ Fix Required:</strong><br/>
        1. Set DISABLE_COMPONENT = true<br/>
        2. Set BLOCK_ALL_MESSAGES = true<br/>
        3. Set DEBUG_MODE = false<br/>
        4. This will prevent interference with the JavaScript component
      </Typography>
    </Box>
  );
}