import { Chip, styled, Typography, useTheme } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { observer } from "mobx-react-lite";
import React from "react";
import { DemoInfoType } from "../../stores/DemoInfo";
import { uiStore } from "../../stores/stores";

type TagsSectionProps = Partial<{  
  perLineGridItems: Partial<{ xs: number, sm: number, md: number, lg: number}>
}> & {
  demo: DemoInfoType
};

const TagChip = styled(Chip)(({theme}) => ({
   maxWidth: 100, marginLeft: theme.spacing(2) 
}));

const TagsSection: React.FC<TagsSectionProps> = observer(({ demo, perLineGridItems }) => {
  const { title, tags } = demo;
  const theme = useTheme();

  return (
    <>
      <Typography
        sx={{ paddingBottom: theme.spacing(1) }}
        color={"text.secondary"}
      >
        Tags
      </Typography>
      <Grid container spacing={3} sx={{ width: "100%" }} {...perLineGridItems}>
        {!!tags &&
          tags.map((tag: string) => (
            <Grid key={`${title}-${tag}`} xs={4}>
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
    </>
  );
});

export default TagsSection;
