import { Divider, List, ListItemButton } from "@mui/material";
import { demoInfoStore } from "../../../stores/stores";
import React from "react";
import DemoListItem from "./DemoListItem";

type DemoListProps = React.HTMLAttributes<HTMLDivElement> & {
  selectedDemo: string;
};

const DemoList: React.FC<DemoListProps> = (props) => {
  const [ selectedDemo, setSelectedDemo ] = React.useState(props.selectedDemo);

  React.useEffect(() => {
    setSelectedDemo(props.selectedDemo);
  }, [props.selectedDemo])

  return (
    <List>
      {Array.from(demoInfoStore.demos.values()).map((demo) => (
        <>
          <ListItemButton
          sx={{ minHeight: (theme) => theme.spacing(12.5) }}
          selected={demo.title === selectedDemo}>
            <DemoListItem demo={demo} />
          </ListItemButton>
          <Divider sx={{ marginTop: (theme) => theme.spacing(1)}} />
        </>
      ))}
    </List>
  );
};

export default DemoList;
