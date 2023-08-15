import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import React from "react";
import { useNavigate } from "react-router-dom";
import { DemoInfoType } from "../../../stores/DemoInfo";
import SupportedLanguagesMini from "./SupportedLanguagesMini";
import TagsMini from "./TagsMini";

type DemoListItemProps = React.HTMLAttributes<HTMLLIElement> & {
  demo: DemoInfoType;
};

const DemoListItem: React.FC<DemoListItemProps> = ({ demo }) => {
  const { title, languages } = demo;
  const navigate = useNavigate();

  return (
    <Box onClick={() => navigate(`../demo/${title}`)}>
    <Grid container sx={{ width: '100%'}}>
      <Grid xs={5}>
        <Typography variant="h6" component="div">
          {title}
        </Typography>
        <SupportedLanguagesMini languages={languages} />
      </Grid>
      <Grid xs={7}>
        <TagsMini demo={demo} />
      </Grid>
    </Grid>
    </Box>
  );
};

export default DemoListItem;
