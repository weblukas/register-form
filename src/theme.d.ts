import { ThemeOptions } from "@mui/material/styles";
import React from 'react';
import * as CSS from 'csstype';
import { Palette } from './createPalette';



declare module '@mui/material/styles' {
  interface Theme {
    status: {
      danger: string;
    };
  }
  interface ThemeOptions {
    status?: {
      danger?: string;
    };
  }
}




// import {
//   ThemeOptions as SystemThemeOptions,
//   Theme as SystemTheme,
//   SxProps,
//   CSSObject,
//   SxConfig,
// } from '@mui/system';

// export interface Theme extends BaseTheme {
//   components?: Components<BaseTheme>;
//   unstable_sx: (props: SxProps<Theme>) => CSSObject;
//   unstable_sxConfig: SxConfig;
// }

// export interface ThemeOptions extends Omit<SystemThemeOptions, 'zIndex'> {
//   mixins?: MixinsOptions;
//   components?: Components<Omit<Theme, 'components'>>;
//   palette?: PaletteOptions;
//   shadows?: Shadows;
//   transitions?: TransitionsOptions;
//   typography?: TypographyOptions | ((palette: Palette) => TypographyOptions);
//   zIndex?: ZIndexOptions;
//   unstable_strictMode?: boolean;
//   unstable_sxConfig?: SxConfig;
// }


//         export interface FontStyle
//     extends Required<{
//         fontFamily: React.CSSProperties['fontFamily'];
//         fontSize: number;
//         fontWeightLight: React.CSSProperties['fontWeight'];
//         fontWeightRegular: React.CSSProperties['fontWeight'];
//         fontWeightMedium: React.CSSProperties['fontWeight'];
//         fontWeightBold: React.CSSProperties['fontWeight'];
//         htmlFontSize: number;
//     }> {}
    
//     export type NormalCssProperties = CSS.Properties<number | string>;
//     export type Fontface = CSS.AtRule.FontFace & { fallbacks?: CSS.AtRule.FontFace[] };
    
//     /**
//      * Allows the user to augment the properties available
//     */
//    export interface BaseCSSProperties extends NormalCssProperties {
//        '@font-face'?: Fontface | Fontface[];
//     }

//     export interface CSSProperties extends BaseCSSProperties {
//     // Allow pseudo selectors and media queries
//     // `unknown` is used since TS does not allow assigning an interface without
//     // an index signature to one with an index signature. This is to allow type safe
//     // module augmentation.
//     // Technically we want any key not typed in `BaseCSSProperties` to be of type
//     // `CSSProperties` but this doesn't work. The index signature needs to cover
//     // BaseCSSProperties as well. Usually you would use `BaseCSSProperties[keyof BaseCSSProperties]`
//     // but this would not allow assigning React.CSSProperties to CSSProperties
//     [k: string]: unknown | CSSProperties;
// }

// export interface FontStyleOptions extends Partial<FontStyle> {
//     allVariants?: React.CSSProperties;
// }

// // TODO: which one should actually be allowed to be subject to module augmentation?
// // current type vs interface decision is kept for historical reasons until we
// // made a decision
// export type TypographyStyle = CSSProperties;
// export interface TypographyStyleOptions extends TypographyStyle {}

// export interface TypographyUtils {
//     pxToRem: (px: number) => string;
// }

// export interface Typography extends Record<Variant, TypographyStyle>, FontStyle, TypographyUtils {}

// export interface TypographyOptions
// extends Partial<Record<Variant, TypographyStyleOptions> & FontStyleOptions> {}

// export default function createTypography(
//     palette: Palette,
//     typography: TypographyOptions | ((palette: Palette) => TypographyOptions),
//     ): Typography;
