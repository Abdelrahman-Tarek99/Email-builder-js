/**
 * Image processing utilities for EmailBuilder.js
 * Handles client-side image processing, compression, and base64 conversion
 */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
/**
 * Compress and resize image to base64
 */
export const processImageToBase64 = (file, options = {}) => __awaiter(void 0, void 0, void 0, function* () {
    const { maxWidth = 1920, maxHeight = 1080, quality = 0.8, format = 'jpeg' } = options;
    return new Promise((resolve, reject) => {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        const img = new Image();
        img.onload = () => {
            try {
                // Calculate new dimensions while maintaining aspect ratio
                let { width, height } = img;
                if (width > maxWidth || height > maxHeight) {
                    const ratio = Math.min(maxWidth / width, maxHeight / height);
                    width *= ratio;
                    height *= ratio;
                }
                // Set canvas dimensions
                canvas.width = width;
                canvas.height = height;
                // Draw and compress image
                ctx === null || ctx === void 0 ? void 0 : ctx.drawImage(img, 0, 0, width, height);
                // Convert to base64 with specified quality
                const mimeType = format === 'jpeg' ? 'image/jpeg' :
                    format === 'png' ? 'image/png' : 'image/webp';
                const base64 = canvas.toDataURL(mimeType, quality);
                // Calculate sizes
                const originalSize = file.size;
                const processedSize = Math.ceil((base64.length * 3) / 4); // Approximate base64 size
                resolve({
                    base64,
                    originalSize,
                    processedSize,
                    width: Math.round(width),
                    height: Math.round(height)
                });
            }
            catch (error) {
                reject(new Error('Failed to process image'));
            }
        };
        img.onerror = () => {
            reject(new Error('Failed to load image'));
        };
        // Load image from file
        const reader = new FileReader();
        reader.onload = (e) => {
            var _c;
            img.src = (_c = e.target) === null || _c === void 0 ? void 0 : _c.result;
        };
        reader.onerror = () => {
            reject(new Error('Failed to read file'));
        };
        reader.readAsDataURL(file);
    });
});
/**
 * Simple base64 conversion without compression
 */
export const convertFileToBase64 = (file) => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = (e) => {
            var _c;
            const base64String = (_c = e.target) === null || _c === void 0 ? void 0 : _c.result;
            if (base64String) {
                resolve(base64String);
            }
            else {
                reject(new Error('Failed to read file'));
            }
        };
        reader.onerror = () => {
            reject(new Error('Failed to read image file'));
        };
        reader.readAsDataURL(file);
    });
};
/**
 * Validate image file
 */
export const validateImageFile = (file, maxSizeMB = 10) => {
    // Check file type
    if (!file.type.startsWith('image/')) {
        return { valid: false, error: 'Please select a valid image file (JPEG, PNG, GIF, etc.)' };
    }
    // Check file size
    const maxSize = maxSizeMB * 1024 * 1024;
    if (file.size > maxSize) {
        return { valid: false, error: `Image file size must be less than ${maxSizeMB}MB` };
    }
    return { valid: true };
};
/**
 * Get file size in human readable format
 */
export const formatFileSize = (bytes) => {
    if (bytes === 0)
        return '0 B';
    const k = 1024;
    const sizes = ['B', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return `${parseFloat((bytes / Math.pow(k, i)).toFixed(1))} ${sizes[i]}`;
};
/**
 * Check if string is base64 image
 */
export const isBase64Image = (url) => {
    var _c;
    return (_c = url === null || url === void 0 ? void 0 : url.startsWith('data:image/')) !== null && _c !== void 0 ? _c : false;
};
/**
 * Get base64 image size
 */
export const getBase64ImageSize = (base64String) => {
    try {
        const base64Data = base64String.split(',')[1];
        if (!base64Data)
            return 'Unknown';
        const sizeInBytes = Math.ceil((base64Data.length * 3) / 4);
        return formatFileSize(sizeInBytes);
    }
    catch (_c) {
        return 'Unknown';
    }
};
//# sourceMappingURL=imageUtils.js.map