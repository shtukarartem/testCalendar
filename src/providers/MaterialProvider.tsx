import {
  StyledEngineProvider,
  ThemeProvider,
  createTheme,
} from '@mui/material/styles';
import { FC, ReactNode } from 'react';

const theme = createTheme({
  palette: {
    primary: { main: '#5C5CFF' },
    secondary: { main: '#1c1b1f' },
  },
});

type Props = {
  children: ReactNode;
};

export const MaterialProvider: FC<Props> = ({ children }) => (
  <StyledEngineProvider injectFirst>
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  </StyledEngineProvider>
);
