import { createTheme } from '@mui/material';

export const darkTheme = createTheme({
    palette: {
        mode: 'dark'
    }
});

export const lightTheme = createTheme({
    palette: {
        mode: 'light'
    }
})

export const themes = new Map();
themes.set('dark', darkTheme);
themes.set('light', lightTheme);