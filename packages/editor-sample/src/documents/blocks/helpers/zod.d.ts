import { z } from 'zod';
export declare function zColor(): z.ZodString;
export declare function zFontFamily(): z.ZodEnum<["MODERN_SANS", "BOOK_SANS", "ORGANIC_SANS", "GEOMETRIC_SANS", "HEAVY_SANS", "ROUNDED_SANS", "MODERN_SERIF", "BOOK_SERIF", "MONOSPACE"]>;
export declare function zFontWeight(): z.ZodEnum<["bold", "normal"]>;
export declare function zTextAlign(): z.ZodEnum<["left", "center", "right"]>;
export declare function zPadding(): z.ZodObject<{
    top: z.ZodNumber;
    bottom: z.ZodNumber;
    right: z.ZodNumber;
    left: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    top: number;
    bottom: number;
    right: number;
    left: number;
}, {
    top: number;
    bottom: number;
    right: number;
    left: number;
}>;
//# sourceMappingURL=zod.d.ts.map