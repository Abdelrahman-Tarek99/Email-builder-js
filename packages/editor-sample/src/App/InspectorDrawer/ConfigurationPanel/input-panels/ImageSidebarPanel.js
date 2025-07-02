var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import React, { useRef, useState } from 'react';
import { CloudUploadOutlined, VerticalAlignBottomOutlined, VerticalAlignCenterOutlined, VerticalAlignTopOutlined, } from '@mui/icons-material';
import { Alert, Box, Button, LinearProgress, Stack, ToggleButton, Typography } from '@mui/material';
import { ImagePropsSchema } from '@usewaypoint/block-image';
import { formatFileSize, getBase64ImageSize, isBase64Image, processImageToBase64, validateImageFile, } from '../../../../utils/imageUtils';
import BaseSidebarPanel from './helpers/BaseSidebarPanel';
import RadioGroupInput from './helpers/inputs/RadioGroupInput';
import TextDimensionInput from './helpers/inputs/TextDimensionInput';
import TextInput from './helpers/inputs/TextInput';
import MultiStylePropertyPanel from './helpers/style-inputs/MultiStylePropertyPanel';
export default function ImageSidebarPanel({ data, setData }) {
    var _c, _d, _10, _11, _12, _13, _14, _15, _16, _17, _18;
    const [, setErrors] = useState(null);
    const [uploadStatus, setUploadStatus] = useState({
        type: null,
        message: '',
    });
    const [isProcessing, setIsProcessing] = useState(false);
    const [progress, setProgress] = useState(0);
    const [processingInfo, setProcessingInfo] = useState(null);
    const fileInputRef = useRef(null);
    const abortControllerRef = useRef(null);
    const updateData = (d) => {
        const res = ImagePropsSchema.safeParse(d);
        if (res.success) {
            setData(res.data);
            setErrors(null);
        }
        else {
            setErrors(res.error);
        }
    };
    const handleFileUpload = (event) => __awaiter(this, void 0, void 0, function* () {
        var _19;
        const file = (_19 = event.target.files) === null || _19 === void 0 ? void 0 : _19[0];
        if (!file)
            return;
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
                    if (prev >= 90)
                        return prev;
                    return prev + Math.random() * 10;
                });
            }, 100);
            // Process image with compression
            const result = yield processImageToBase64(file, {
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
            updateData(Object.assign(Object.assign({}, data), { props: Object.assign(Object.assign({}, data.props), { url: result.base64 }) }));
            setUploadStatus({
                type: 'success',
                message: `Image processed successfully! Compressed by ${compressionRatio}%`,
            });
            // Clear success message after 5 seconds
            setTimeout(() => {
                setUploadStatus({ type: null, message: '' });
                setProcessingInfo(null);
            }, 5000);
        }
        catch (error) {
            if (error instanceof Error && error.name === 'AbortError') {
                setUploadStatus({
                    type: 'error',
                    message: 'Image processing was cancelled.',
                });
            }
            else {
                setUploadStatus({
                    type: 'error',
                    message: 'Failed to process image. Please try again.',
                });
            }
        }
        finally {
            setIsProcessing(false);
            setProgress(0);
            abortControllerRef.current = null;
            // Clear the file input
            if (fileInputRef.current) {
                fileInputRef.current.value = '';
            }
        }
    });
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
    return (React.createElement(BaseSidebarPanel, { title: "Image block" },
        React.createElement(Box, { sx: { mb: 2 } },
            React.createElement(Typography, { variant: "subtitle2", gutterBottom: true }, "Upload Image"),
            React.createElement(Typography, { variant: "caption", color: "text.secondary", sx: { mb: 2, display: 'block' } },
                React.createElement("strong", null, "Note:"),
                " For email compatibility, we recommend using external URLs. Base64 images may be blocked by some email clients."),
            React.createElement("input", { accept: "image/*", style: { display: 'none' }, id: "image-upload-button", type: "file", ref: fileInputRef, onChange: handleFileUpload, disabled: isProcessing }),
            React.createElement("label", { htmlFor: "image-upload-button" },
                React.createElement(Button, { variant: "outlined", component: "span", startIcon: React.createElement(CloudUploadOutlined, null), fullWidth: true, sx: { mb: 1 }, disabled: isProcessing }, isProcessing ? 'Processing...' : 'Choose Image File')),
            isProcessing && (React.createElement(Box, { sx: { mb: 2 } },
                React.createElement(LinearProgress, { variant: "determinate", value: progress, sx: { mb: 1 } }),
                React.createElement(Typography, { variant: "caption", color: "text.secondary" },
                    "Processing image... ",
                    Math.round(progress),
                    "%"),
                React.createElement(Button, { size: "small", onClick: handleCancelUpload, sx: { mt: 1 }, color: "error" }, "Cancel"))),
            processingInfo && (React.createElement(Box, { sx: { mb: 2, p: 1, bgcolor: 'warning.light', borderRadius: 1 } },
                React.createElement(Typography, { variant: "caption", color: "warning.contrastText", display: "block" },
                    React.createElement("strong", null, "Warning:"),
                    " Base64 images may not display in all email clients."),
                React.createElement(Typography, { variant: "caption", color: "warning.contrastText", display: "block" },
                    "Original: ",
                    processingInfo.originalSize,
                    " \u2192 Processed: ",
                    processingInfo.processedSize),
                React.createElement(Typography, { variant: "caption", color: "warning.contrastText", display: "block" },
                    "Compression: ",
                    processingInfo.compressionRatio))),
            React.createElement(Typography, { variant: "caption", color: "text.secondary", display: "block" }, "Supports: JPEG, PNG, GIF (max 10MB). For production emails, consider uploading to a CDN and using the URL.")),
        uploadStatus.type && (React.createElement(Alert, { severity: uploadStatus.type, sx: { mb: 2 } }, uploadStatus.message)),
        ((_c = data.props) === null || _c === void 0 ? void 0 : _c.url) && (React.createElement(Box, { sx: { mb: 2, p: 1, bgcolor: 'grey.50', borderRadius: 1 } },
            React.createElement(Typography, { variant: "caption", color: "text.secondary", display: "block" },
                "Current image: ",
                isBase64Image(data.props.url) ? 'Base64 (embedded)' : 'External URL'),
            isBase64Image(data.props.url) && (React.createElement(Typography, { variant: "caption", color: "text.secondary", display: "block" },
                "Size: ",
                getBase64ImageSize(data.props.url))))),
        React.createElement(TextInput, { label: "Source URL (or paste base64)", defaultValue: (_10 = (_d = data.props) === null || _d === void 0 ? void 0 : _d.url) !== null && _10 !== void 0 ? _10 : '', onChange: (v) => {
                const url = v.trim().length === 0 ? null : v.trim();
                updateData(Object.assign(Object.assign({}, data), { props: Object.assign(Object.assign({}, data.props), { url }) }));
            }, placeholder: "Enter image URL or paste base64 data URL" }),
        React.createElement(TextInput, { label: "Alt text", defaultValue: (_12 = (_11 = data.props) === null || _11 === void 0 ? void 0 : _11.alt) !== null && _12 !== void 0 ? _12 : '', onChange: (alt) => updateData(Object.assign(Object.assign({}, data), { props: Object.assign(Object.assign({}, data.props), { alt }) })) }),
        React.createElement(TextInput, { label: "Click through URL", defaultValue: (_14 = (_13 = data.props) === null || _13 === void 0 ? void 0 : _13.linkHref) !== null && _14 !== void 0 ? _14 : '', onChange: (v) => {
                const linkHref = v.trim().length === 0 ? null : v.trim();
                updateData(Object.assign(Object.assign({}, data), { props: Object.assign(Object.assign({}, data.props), { linkHref }) }));
            } }),
        React.createElement(Stack, { direction: "row", spacing: 2 },
            React.createElement(TextDimensionInput, { label: "Width", defaultValue: (_15 = data.props) === null || _15 === void 0 ? void 0 : _15.width, onChange: (width) => updateData(Object.assign(Object.assign({}, data), { props: Object.assign(Object.assign({}, data.props), { width }) })) }),
            React.createElement(TextDimensionInput, { label: "Height", defaultValue: (_16 = data.props) === null || _16 === void 0 ? void 0 : _16.height, onChange: (height) => updateData(Object.assign(Object.assign({}, data), { props: Object.assign(Object.assign({}, data.props), { height }) })) })),
        React.createElement(RadioGroupInput, { label: "Content alignment", defaultValue: (_18 = (_17 = data.props) === null || _17 === void 0 ? void 0 : _17.contentAlignment) !== null && _18 !== void 0 ? _18 : 'middle', onChange: (contentAlignment) => updateData(Object.assign(Object.assign({}, data), { props: Object.assign(Object.assign({}, data.props), { contentAlignment }) })) },
            React.createElement(ToggleButton, { value: "top" },
                React.createElement(VerticalAlignTopOutlined, { fontSize: "small" })),
            React.createElement(ToggleButton, { value: "middle" },
                React.createElement(VerticalAlignCenterOutlined, { fontSize: "small" })),
            React.createElement(ToggleButton, { value: "bottom" },
                React.createElement(VerticalAlignBottomOutlined, { fontSize: "small" }))),
        React.createElement(MultiStylePropertyPanel, { names: ['backgroundColor', 'textAlign', 'padding'], value: data.style, onChange: (style) => updateData(Object.assign(Object.assign({}, data), { style })) })));
}
//# sourceMappingURL=ImageSidebarPanel.js.map