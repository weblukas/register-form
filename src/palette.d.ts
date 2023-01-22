import React from "react";
import { ThemeOptions } from "./theme";

declare module '@mui/material/styles/createPalette' {
  interface Palette {
    status: {
        danger?: string;
    }
    primary: {
      main?: string;
      light?: string;
    };
  }
  interface PaletteOptions {
    otherColor: {
      main?: string;
      secondary?: string;
    };
  }


}

export default function createPalette(palette: PaletteOptions): Palette;