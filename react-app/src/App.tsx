import React from "react";
import { CssBaseline, styled, ThemeProvider } from "@mui/material";
import AppRoutes from "./routing/AppRoutes";
import { stores } from "./stores/stores";

const Root = styled("div")(({ theme }) => ({
  margin: theme.spacing(2),
}));

const App = () => {
  const { uiStore } = stores;

  return (
    <ThemeProvider theme={uiStore.getTheme()}>
      <CssBaseline />
      <Root className="App">
        <AppRoutes />
      </Root>
    </ThemeProvider>
  );
}

export default App;
