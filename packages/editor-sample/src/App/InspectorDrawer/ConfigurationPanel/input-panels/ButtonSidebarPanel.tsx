import React, { useState } from 'react';

import { CodeOutlined } from '@mui/icons-material';
import { Box, Button, Chip, Stack, Typography } from '@mui/material';
import { ButtonProps, ButtonPropsSchema } from '@usewaypoint/block-button';

import BaseSidebarPanel from './helpers/BaseSidebarPanel';
import BooleanInput from './helpers/inputs/BooleanInput';
import ColorInput from './helpers/inputs/ColorInput';
import RadioGroupInput from './helpers/inputs/RadioGroupInput';
import TextInput from './helpers/inputs/TextInput';
import MultiStylePropertyPanel from './helpers/style-inputs/MultiStylePropertyPanel';

type ButtonSidebarPanelProps = {
  data: ButtonProps;
  setData: (v: ButtonProps) => void;
};

// Common merge tag variables for buttons
const BUTTON_VARIABLES = [
  { label: 'User Name', value: '{{user.name}}' },
  { label: 'Order ID', value: '{{order.id}}' },
  { label: 'Reset Link', value: '{{reset.link}}' },
  { label: 'Product URL', value: '{{product.url}}' },
  { label: 'Tracking URL', value: '{{shipping.tracking_url}}' },
  { label: 'Company URL', value: '{{company.url}}' },
];

export default function ButtonSidebarPanel({ data, setData }: ButtonSidebarPanelProps) {
  const [, setErrors] = useState<Zod.ZodError | null>(null);
  const [showVariables, setShowVariables] = useState(false);

  const updateData = (d: unknown) => {
    const res = ButtonPropsSchema.safeParse(d);
    if (res.success) {
      setData(res.data);
      setErrors(null);
    } else {
      setErrors(res.error);
    }
  };

  const insertVariable = (variable: string, field: 'text' | 'url') => {
    const currentValue = field === 'text' ? data.props?.text || '' : data.props?.url || '';
    const newValue = currentValue + variable;
    
    if (field === 'text') {
      updateData({ ...data, props: { ...data.props, text: newValue } });
    } else {
      updateData({ ...data, props: { ...data.props, url: newValue } });
    }
  };

  return (
    <BaseSidebarPanel title="Button block">
      <TextInput
        label="Button text"
        defaultValue={data.props?.text ?? ''}
        onChange={(text) => updateData({ ...data, props: { ...data.props, text } })}
      />

      {/* Variable Picker for Button Text */}
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
              {BUTTON_VARIABLES.map((variable) => (
                <Chip
                  key={variable.value}
                  label={variable.label}
                  size="small"
                  onClick={() => insertVariable(variable.value, 'text')}
                  sx={{ mb: 1 }}
                  clickable
                />
              ))}
            </Stack>
          </Box>
        )}
      </Box>

      <TextInput
        label="URL"
        defaultValue={data.props?.url ?? ''}
        onChange={(url) => updateData({ ...data, props: { ...data.props, url } })}
        placeholder="https://example.com"
      />

      {/* Variable Picker for URL */}
      {showVariables && (
        <Box sx={{ mb: 2, p: 2, bgcolor: 'grey.50', borderRadius: 1 }}>
          <Typography variant="caption" color="text.secondary" display="block" sx={{ mb: 1 }}>
            URL variables:
          </Typography>
          <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
            {BUTTON_VARIABLES.map((variable) => (
              <Chip
                key={variable.value}
                label={variable.label}
                size="small"
                onClick={() => insertVariable(variable.value, 'url')}
                sx={{ mb: 1 }}
                clickable
              />
            ))}
          </Stack>
        </Box>
      )}

      <ColorInput
        label="Background color"
        defaultValue={data.props?.buttonBackgroundColor ?? '#000000'}
        onChange={(buttonBackgroundColor) => updateData({ ...data, props: { ...data.props, buttonBackgroundColor } })}
      />

      <ColorInput
        label="Text color"
        defaultValue={data.props?.buttonTextColor ?? '#FFFFFF'}
        onChange={(buttonTextColor) => updateData({ ...data, props: { ...data.props, buttonTextColor } })}
      />

      <RadioGroupInput
        label="Button style"
        defaultValue={data.props?.buttonStyle ?? 'rounded'}
        onChange={(buttonStyle) => updateData({ ...data, props: { ...data.props, buttonStyle } })}
      >
        <Button value="rounded">Rounded</Button>
        <Button value="rectangle">Rectangle</Button>
        <Button value="pill">Pill</Button>
      </RadioGroupInput>

      <RadioGroupInput
        label="Size"
        defaultValue={data.props?.size ?? 'medium'}
        onChange={(size) => updateData({ ...data, props: { ...data.props, size } })}
      >
        <Button value="small">Small</Button>
        <Button value="medium">Medium</Button>
        <Button value="large">Large</Button>
      </RadioGroupInput>

      <BooleanInput
        label="Full width"
        defaultValue={data.props?.fullWidth ?? false}
        onChange={(fullWidth) => updateData({ ...data, props: { ...data.props, fullWidth } })}
      />

      <MultiStylePropertyPanel
        names={['backgroundColor', 'fontSize', 'fontFamily', 'fontWeight', 'textAlign', 'padding']}
        value={data.style}
        onChange={(style) => updateData({ ...data, style })}
      />
    </BaseSidebarPanel>
  );
}
