import React, { useState } from 'react';

import { CodeOutlined } from '@mui/icons-material';
import { Box, Button, Chip, Stack, Typography } from '@mui/material';
import { TextProps, TextPropsSchema } from '@usewaypoint/block-text';

import BaseSidebarPanel from './helpers/BaseSidebarPanel';
import BooleanInput from './helpers/inputs/BooleanInput';
import TextInput from './helpers/inputs/TextInput';
import MultiStylePropertyPanel from './helpers/style-inputs/MultiStylePropertyPanel';

type TextSidebarPanelProps = {
  data: TextProps;
  setData: (v: TextProps) => void;
};

// Common merge tag variables
const COMMON_VARIABLES = [
  { label: 'User Name', value: '{{user.name}}' },
  { label: 'User Email', value: '{{user.email}}' },
  { label: 'Order ID', value: '{{order.id}}' },
  { label: 'Order Total', value: '{{order.total}}' },
  { label: 'Company Name', value: '{{company.name}}' },
  { label: 'Current Date', value: '{{date.current}}' },
  { label: 'Reset Link', value: '{{reset.link}}' },
  { label: 'Product Name', value: '{{product.name}}' },
  { label: 'Product Price', value: '{{product.price}}' },
  { label: 'Tracking Number', value: '{{shipping.tracking}}' },
];

export default function TextSidebarPanel({ data, setData }: TextSidebarPanelProps) {
  const [, setErrors] = useState<Zod.ZodError | null>(null);
  const [showVariables, setShowVariables] = useState(false);

  const updateData = (d: unknown) => {
    const res = TextPropsSchema.safeParse(d);
    if (res.success) {
      setData(res.data);
      setErrors(null);
    } else {
      setErrors(res.error);
    }
  };

  const insertVariable = (variable: string) => {
    const currentText = data.props?.text || '';
    const newText = currentText + variable;
    updateData({ ...data, props: { ...data.props, text: newText } });
  };

  return (
    <BaseSidebarPanel title="Text block">
      <TextInput
        label="Text content"
        defaultValue={data.props?.text ?? ''}
        onChange={(text) => updateData({ ...data, props: { ...data.props, text } })}
        rows={4}
      />

      {/* Variable Picker */}
      <Box sx={{ mb: 2 }}>
        <Button
          size="small"
          startIcon={<CodeOutlined />}
          onClick={() => setShowVariables(!showVariables)}
          variant="outlined"
          fullWidth
        >
          {showVariables ? 'Hide Variables' : 'Add Variables'}
        </Button>

        {showVariables && (
          <Box sx={{ mt: 2, p: 2, bgcolor: 'grey.50', borderRadius: 1 }}>
            <Typography variant="caption" color="text.secondary" display="block" sx={{ mb: 1 }}>
              Click to insert variable:
            </Typography>
            <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
              {COMMON_VARIABLES.map((variable) => (
                <Chip
                  key={variable.value}
                  label={variable.label}
                  size="small"
                  onClick={() => insertVariable(variable.value)}
                  sx={{ mb: 1 }}
                  clickable
                />
              ))}
            </Stack>
            <Typography variant="caption" color="text.secondary" sx={{ mt: 2, display: 'block' }}>
              <strong>Note:</strong> These are placeholder variables. Replace with your actual data structure when sending emails.
            </Typography>
          </Box>
        )}
      </Box>

      <BooleanInput
        label="Markdown"
        defaultValue={data.props?.markdown ?? false}
        onChange={(markdown) => updateData({ ...data, props: { ...data.props, markdown } })}
      />

      <MultiStylePropertyPanel
        names={['color', 'backgroundColor', 'fontSize', 'fontFamily', 'fontWeight', 'textAlign', 'padding']}
        value={data.style}
        onChange={(style) => updateData({ ...data, style })}
      />
    </BaseSidebarPanel>
  );
}
