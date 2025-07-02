/**
 * Image processing utilities for EmailBuilder.js
 * Handles client-side image processing, compression, and base64 conversion
 */
export interface ImageProcessingOptions {
    maxWidth?: number;
    maxHeight?: number;
    quality?: number;
    format?: 'jpeg' | 'png' | 'webp';
}
export interface ProcessedImageResult {
    base64: string;
    originalSize: number;
    processedSize: number;
    width: number;
    height: number;
}
/**
 * Compress and resize image to base64
 */
export declare const processImageToBase64: (file: File, options?: ImageProcessingOptions) => Promise<ProcessedImageResult>;
/**
 * Simple base64 conversion without compression
 */
export declare const convertFileToBase64: (file: File) => Promise<string>;
/**
 * Validate image file
 */
export declare const validateImageFile: (file: File, maxSizeMB?: number) => {
    valid: boolean;
    error?: string;
};
/**
 * Get file size in human readable format
 */
export declare const formatFileSize: (bytes: number) => string;
/**
 * Check if string is base64 image
 */
export declare const isBase64Image: (url: string | null | undefined) => boolean;
/**
 * Get base64 image size
 */
export declare const getBase64ImageSize: (base64String: string) => string;
//# sourceMappingURL=imageUtils.d.ts.map