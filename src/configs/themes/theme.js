import { createTheme } from '@mui/material/styles';
import { VCPTypography } from '@/configs/themes/vcp-typography';
import { VCPComponent } from '@/configs/themes/vcp-component';
import { VCPPalette } from '@/configs/themes/vcp-palette';

const getDesignTokens = (mode) => ({
  palette: VCPPalette(mode),
  typography: {
    // fontFamily: VCPTypography.fontFamily,
    ...VCPTypography,
  },
  components: VCPComponent(mode),
});

export const createAppTheme = (mode) => createTheme(getDesignTokens(mode));
