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
export const processImageToBase64 = async (
  file: File,
  options: ImageProcessingOptions = {}
): Promise<ProcessedImageResult> => {
  const {
    maxWidth = 1920,
    maxHeight = 1080,
    quality = 0.8,
    format = 'jpeg'
  } = options;

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
        ctx?.drawImage(img, 0, 0, width, height);

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
      } catch (error) {
        reject(new Error('Failed to process image'));
      }
    };

    img.onerror = () => {
      reject(new Error('Failed to load image'));
    };

    // Load image from file
    const reader = new FileReader();
    reader.onload = (e) => {
      img.src = e.target?.result as string;
    };
    reader.onerror = () => {
      reject(new Error('Failed to read file'));
    };
    reader.readAsDataURL(file);
  });
};

/**
 * Simple base64 conversion without compression
 */
export const convertFileToBase64 = (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    
    reader.onload = (e) => {
      const base64String = e.target?.result as string;
      if (base64String) {
        resolve(base64String);
      } else {
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
export const validateImageFile = (file: File, maxSizeMB: number = 10): { valid: boolean; error?: string } => {
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
export const formatFileSize = (bytes: number): string => {
  if (bytes === 0) return '0 B';
  
  const k = 1024;
  const sizes = ['B', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  
  return `${parseFloat((bytes / Math.pow(k, i)).toFixed(1))} ${sizes[i]}`;
};

/**
 * Check if string is base64 image
 */
export const isBase64Image = (url: string | null | undefined): boolean => {
  return url?.startsWith('data:image/') ?? false;
};

/**
 * Get base64 image size
 */
export const getBase64ImageSize = (base64String: string): string => {
  try {
    const base64Data = base64String.split(',')[1];
    if (!base64Data) return 'Unknown';
    
    const sizeInBytes = Math.ceil((base64Data.length * 3) / 4);
    return formatFileSize(sizeInBytes);
  } catch {
    return 'Unknown';
  }
}; 