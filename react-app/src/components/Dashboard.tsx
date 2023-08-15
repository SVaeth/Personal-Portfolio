import React from "react";
import Grid from "@mui/material/Unstable_Grid2";
import DemoCard from "./DemoCard";
import { demoInfoStore } from "../stores/stores";

const Dashboard: React.FC = () => {

  return (
    <Grid
      container
      spacing={3}
      sx={{ marginTop: (theme) => theme.spacing(3) }}
    >
      {Array.from(demoInfoStore.demos.values()).map((demo, idx) => (
        <Grid key={`demo-${idx}`} sm={6} md={3} lg={2}>
          <DemoCard
            demo={demo}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default Dashboard;
