import {
  Alert,
  AppBar,
  Box,
  IconButton,
  Snackbar,
  Toolbar,
  Typography,
} from "@mui/material";
import { blue } from "@mui/material/colors";
import HomeIcon from "@mui/icons-material/Home";
import React from "react";
import CancelIcon from "@mui/icons-material/Cancel";
import { useNavigate } from "react-router-dom";
import { observer } from "mobx-react-lite";

type MainAppBarProps = React.HTMLAttributes<HTMLDivElement> & {
  errors?: string[];
};

const MainAppBar: React.FC<MainAppBarProps> = observer(({ errors = [] }) => {
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(errors.map((e) => true));

  const handleClose = (idx: number) =>
    setOpen(open.map((state, sidx) => state && idx !== sidx));

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          marginBottom: (theme) => theme.spacing(3),
          zIndex: (theme) => theme.zIndex.drawer + 1,
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          <Typography
            variant="h3"
            component="span"
            sx={{
              marginLeft: (theme) => theme.spacing(2),
              color: blue["600"],
            }}
            noWrap
          >
            Portfolio
          </Typography>
          <Box
            sx={{
              margin: (theme) => `0 ${theme.spacing(2)} 0 ${theme.spacing(1)}`,
            }}
          >
            <IconButton onClick={() => navigate("/")}>
              <HomeIcon />
            </IconButton>
          </Box>
        </Box>
      </AppBar>
      <Toolbar />
      {errors.map((e, idx) => (
        <Snackbar
          open={open[idx]}
          onClose={() => handleClose(idx)}
          autoHideDuration={6000}
        >
          <Alert
            key={`error-banner-${idx}`}
            onClose={() => handleClose(idx)}
            severity="error"
            sx={{ width: "100%" }}
          >
            {e}
          </Alert>
        </Snackbar>
      ))}
    </>
  );
});

export default MainAppBar;
