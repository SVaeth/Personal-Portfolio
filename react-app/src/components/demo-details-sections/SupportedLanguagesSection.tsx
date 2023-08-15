import { Typography, useTheme } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import React from "react";

type SupportedLanguagesSectionProps = { title: string, languages: string[] };

const SupportedLanguagesSection: React.FC<SupportedLanguagesSectionProps> = ({ title, languages }) => {
  const theme = useTheme();

  return (
    <>
      <Typography sx={{ paddingBottom: theme.spacing(1) }} color={"text.secondary"}>Languages</Typography>
      <Grid container spacing={3} sx={{ width: "100%" }}>
        {!!languages &&
          languages.map((lang: string) => (
            <Grid key={`${title}-${lang}`} xs={4}>
              <span
                style={{
                  display: "list-item",
                  listStyle: "square",
                  marginLeft: theme.spacing(2),
                }}
              >
                {lang}
              </span>
            </Grid>
          ))}
      </Grid>
    </>
  );
};

export default SupportedLanguagesSection;