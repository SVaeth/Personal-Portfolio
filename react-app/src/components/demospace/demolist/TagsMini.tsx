import { Chip, styled, Typography, useTheme } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { observer } from "mobx-react-lite";
import React from "react";
import { DemoInfoType } from "../../../stores/DemoInfo";
import { uiStore } from "../../../stores/stores";

type TagsMiniProps = { demo: DemoInfoType };

const TagChip = styled(Chip)(({ theme }) => ({
  maxWidth: 100,
  marginLeft: theme.spacing(2),
}));

const TagsMini: React.FC<TagsMiniProps> = observer(({ demo }) => {
  const { title, tags } = demo;

  return (
    <Grid container>
      <Grid xs={3}>
        <Typography
          sx={{ 
            lineHeight: 6
         }}
          color={"text.secondary"}
        >
          Tags
        </Typography>
      </Grid>
      <Grid xs={9}>
        <Grid container spacing={3} sx={{ width: "100%" }}>
          {!!tags &&
            tags.map((tag: string) => (
              <Grid key={`${title}-${tag}`} xs={6}>
                {!!uiStore.editable ? (
                  <TagChip
                    sx={{ maxWidth: 100 }}
                    label={tag}
                    onDelete={() => {
                      demo.removeTags(tag);
                    }}
                  />
                ) : (
                  <TagChip sx={{ maxWidth: 100 }} label={tag} />
                )}
              </Grid>
            ))}
        </Grid>
      </Grid>
    </Grid>
  );
});

export default TagsMini;
