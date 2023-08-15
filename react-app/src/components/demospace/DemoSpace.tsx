import {
  Alert,
  Box,
  CSSObject,
  Divider,
  IconButton,
  styled,
  Theme,
  Toolbar,
} from "@mui/material";
import MuiDrawer from "@mui/material/Drawer";
import React from "react";
import { useMatch } from "react-router-dom";
import { demoInfoStore } from "../../stores/stores";
import DemoList from "./demolist/DemoList";
import DemoPane from "./DemoPane";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";

const drawerWidth = 360;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

const DemoSpace = () => {
  const {
    params: { title },
  } = useMatch({ path: "/demo/:title" }) ?? { params: { title: "" } };
  const [open, setOpen] = React.useState(true);

  let demo;
  if (!!title) {
    demo = demoInfoStore.demos.get(title);
  }

  return (
    <Box sx={{ display: "flex" }}>
      <Drawer variant="permanent" open={open}>
        <Toolbar />
        <DrawerHeader>
          <IconButton onClick={() => setOpen(!open)}>
            {open ? (
              <KeyboardArrowLeftIcon />
            ) : (
              <KeyboardDoubleArrowRightIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        {open && <DemoList selectedDemo={title || ""} />}
      </Drawer>
      {!!title && !!demo ? <DemoPane demo={demo} /> : <Alert severity="error" >Demo not found</Alert>}
    </Box>
  );
};

export default DemoSpace;
