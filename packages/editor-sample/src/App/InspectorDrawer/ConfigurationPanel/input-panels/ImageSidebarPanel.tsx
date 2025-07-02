import React, { useRef,useState } from 'react';

import {
  CloudUploadOutlined,
  VerticalAlignBottomOutlined,
  VerticalAlignCenterOutlined,
  VerticalAlignTopOutlined,
} from '@mui/icons-material';
import { Alert, Box, Button, LinearProgress, Stack, ToggleButton, Typography } from '@mui/material';
import { ImageProps, ImagePropsSchema } from '@usewaypoint/block-image';

import {
  formatFileSize,
  getBase64ImageSize,
  isBase64Image,
  processImageToBase64,
  validateImageFile,
} from '../../../../utils/imageUtils';

import BaseSidebarPanel from './helpers/BaseSidebarPanel';
import RadioGroupInput from './helpers/inputs/RadioGroupInput';
import TextDimensionInput from './helpers/inputs/TextDimensionInput';
import TextInput from './helpers/inputs/TextInput';
import MultiStylePropertyPanel from './helpers/style-inputs/MultiStylePropertyPanel';

type ImageSidebarPanelProps = {
  data: ImageProps;
  setData: (v: ImageProps) => void;
};

export default function ImageSidebarPanel({ data, setData }: ImageSidebarPanelProps) {
  const [, setErrors] = useState<Zod.ZodError | null>(null);
  const [uploadStatus, setUploadStatus] = useState<{ type: 'success' | 'error' | null; message: string }>({
    type: null,
    message: '',
  });
  const [isProcessing, setIsProcessing] = useState(false);
  const [progress, setProgress] = useState(0);
  const [processingInfo, setProcessingInfo] = useState<{
    originalSize: string;
    processedSize: string;
    compressionRatio: string;
  } | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const abortControllerRef = useRef<AbortController | null>(null);

  const updateData = (d: unknown) => {
    const res = ImagePropsSchema.safeParse(d);
    if (res.success) {
      setData(res.data);
      setErrors(null);
    } else {
      setErrors(res.error);
    }
  };

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    // Cancel any previous upload
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }

    // Create new abort controller for this upload
    abortControllerRef.current = new AbortController();

    // Validate file
    const validation = validateImageFile(file, 10);
    if (!validation.valid) {
      setUploadStatus({
        type: 'error',
        message: validation.error || 'Invalid file',
      });
      return;
    }

    setIsProcessing(true);
    setProgress(0);
    setUploadStatus({ type: null, message: '' });
    setProcessingInfo(null);

    try {
      // Simulate progress for better UX
      const progressInterval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 90) return prev;
          return prev + Math.random() * 10;
        });
      }, 100);

      // Process image with compression
      const result = await processImageToBase64(file, {
        maxWidth: 1920,
        maxHeight: 1080,
        quality: 0.8,
        format: 'jpeg'
      });
      
      clearInterval(progressInterval);
      setProgress(100);

      // Calculate compression info
      const compressionRatio = ((result.originalSize - result.processedSize) / result.originalSize * 100).toFixed(1);
      setProcessingInfo({
        originalSize: formatFileSize(result.originalSize),
        processedSize: formatFileSize(result.processedSize),
        compressionRatio: `${compressionRatio}%`
      });

      updateData({ ...data, props: { ...data.props, url: result.base64 } });
      setUploadStatus({
        type: 'success',
        message: `Image processed successfully! Compressed by ${compressionRatio}%`,
      });
      
      // Clear success message after 5 seconds
      setTimeout(() => {
        setUploadStatus({ type: null, message: '' });
        setProcessingInfo(null);
      }, 5000);
    } catch (error) {
      if (error instanceof Error && error.name === 'AbortError') {
        setUploadStatus({
          type: 'error',
          message: 'Image processing was cancelled.',
        });
      } else {
        setUploadStatus({
          type: 'error',
          message: 'Failed to process image. Please try again.',
        });
      }
    } finally {
      setIsProcessing(false);
      setProgress(0);
      abortControllerRef.current = null;
      
      // Clear the file input
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    }
  };

  const handleCancelUpload = () => {
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }
    setIsProcessing(false);
    setProgress(0);
    setUploadStatus({ type: null, message: '' });
    setProcessingInfo(null);
    
    // Clear the file input
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <BaseSidebarPanel title="Image block">
      {/* File Upload Section */}
      <Box sx={{ mb: 2 }}>
        <Typography variant="subtitle2" gutterBottom>
          Upload Image
        </Typography>
        <Typography variant="caption" color="text.secondary" sx={{ mb: 2, display: 'block' }}>
          <strong>Note:</strong> For email compatibility, we recommend using external URLs. Base64 images may be blocked by some email clients.
        </Typography>
        
        <input
          accept="image/*"
          style={{ display: 'none' }}
          id="image-upload-button"
          type="file"
          ref={fileInputRef}
          onChange={handleFileUpload}
          disabled={isProcessing}
        />
        <label htmlFor="image-upload-button">
          <Button
            variant="outlined"
            component="span"
            startIcon={<CloudUploadOutlined />}
            fullWidth
            sx={{ mb: 1 }}
            disabled={isProcessing}
          >
            {isProcessing ? 'Processing...' : 'Choose Image File'}
          </Button>
        </label>
        
        {isProcessing && (
          <Box sx={{ mb: 2 }}>
            <LinearProgress 
              variant="determinate" 
              value={progress} 
              sx={{ mb: 1 }}
            />
            <Typography variant="caption" color="text.secondary">
              Processing image... {Math.round(progress)}%
            </Typography>
            <Button
              size="small"
              onClick={handleCancelUpload}
              sx={{ mt: 1 }}
              color="error"
            >
              Cancel
            </Button>
          </Box>
        )}

        {/* Processing Info */}
        {processingInfo && (
          <Box sx={{ mb: 2, p: 1, bgcolor: 'warning.light', borderRadius: 1 }}>
            <Typography variant="caption" color="warning.contrastText" display="block">
              <strong>Warning:</strong> Base64 images may not display in all email clients.
            </Typography>
            <Typography variant="caption" color="warning.contrastText" display="block">
              Original: {processingInfo.originalSize} → Processed: {processingInfo.processedSize}
            </Typography>
            <Typography variant="caption" color="warning.contrastText" display="block">
              Compression: {processingInfo.compressionRatio}
            </Typography>
          </Box>
        )}
        
        <Typography variant="caption" color="text.secondary" display="block">
          Supports: JPEG, PNG, GIF (max 10MB). For production emails, consider uploading to a CDN and using the URL.
        </Typography>
      </Box>

      {/* Upload Status */}
      {uploadStatus.type && (
        <Alert severity={uploadStatus.type} sx={{ mb: 2 }}>
          {uploadStatus.message}
        </Alert>
      )}

      {/* Current Image Info */}
      {data.props?.url && (
        <Box sx={{ mb: 2, p: 1, bgcolor: 'grey.50', borderRadius: 1 }}>
          <Typography variant="caption" color="text.secondary" display="block">
            Current image: {isBase64Image(data.props.url) ? 'Base64 (embedded)' : 'External URL'}
          </Typography>
          {isBase64Image(data.props.url) && (
            <Typography variant="caption" color="text.secondary" display="block">
              Size: {getBase64ImageSize(data.props.url)}
            </Typography>
          )}
        </Box>
      )}

      {/* URL Input (for external URLs) */}
      <TextInput
        label="Source URL (or paste base64)"
        defaultValue={data.props?.url ?? ''}
        onChange={(v) => {
          const url = v.trim().length === 0 ? null : v.trim();
          updateData({ ...data, props: { ...data.props, url } });
        }}
        placeholder="Enter image URL or paste base64 data URL"
      />

      <TextInput
        label="Alt text"
        defaultValue={data.props?.alt ?? ''}
        onChange={(alt) => updateData({ ...data, props: { ...data.props, alt } })}
      />
      <TextInput
        label="Click through URL"
        defaultValue={data.props?.linkHref ?? ''}
        onChange={(v) => {
          const linkHref = v.trim().length === 0 ? null : v.trim();
          updateData({ ...data, props: { ...data.props, linkHref } });
        }}
      />
      <Stack direction="row" spacing={2}>
        <TextDimensionInput
          label="Width"
          defaultValue={data.props?.width}
          onChange={(width) => updateData({ ...data, props: { ...data.props, width } })}
        />
        <TextDimensionInput
          label="Height"
          defaultValue={data.props?.height}
          onChange={(height) => updateData({ ...data, props: { ...data.props, height } })}
        />
      </Stack>

      <RadioGroupInput
        label="Content alignment"
        defaultValue={data.props?.contentAlignment ?? 'middle'}
        onChange={(contentAlignment) => updateData({ ...data, props: { ...data.props, contentAlignment } })}
      >
        <ToggleButton value="top">
          <VerticalAlignTopOutlined fontSize="small" />
        </ToggleButton>
        <ToggleButton value="middle">
          <VerticalAlignCenterOutlined fontSize="small" />
        </ToggleButton>
        <ToggleButton value="bottom">
          <VerticalAlignBottomOutlined fontSize="small" />
        </ToggleButton>
      </RadioGroupInput>

      <MultiStylePropertyPanel
        names={['backgroundColor', 'textAlign', 'padding']}
        value={data.style}
        onChange={(style) => updateData({ ...data, style })}
      />
    </BaseSidebarPanel>
  );
}
