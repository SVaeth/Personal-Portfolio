import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Divider,
  FormControl,
  InputLabel,
  Link,
  MenuItem,
  Select,
  styled,
  Toolbar,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { Box } from "@mui/system";
import React, { HTMLAttributes } from "react";
import { DemoInfoType } from "../../stores/DemoInfo";
import SupportedLanguagesSection from "../demo-details-sections/SupportedLanguagesSection";
import TagsSection from "../demo-details-sections/TagsSection";
import ConsoleView from "./ConsoleDrawer";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const StyledDivider = styled(Divider)(({ theme }) => ({
  margin: `${theme.spacing(2)} 0 ${theme.spacing(1)} 0`,
}));

type DemoPaneProps = HTMLAttributes<HTMLDivElement> & {
  demo: DemoInfoType;
};

const DemoPane: React.FC<DemoPaneProps> = ({ demo }) => {
  const [selectedLang, setSelectedLang] = React.useState<string | null>(null);
  const [showConsole, setShowConsole] = React.useState(false);

  const { title, languages } = demo;

  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        p: 3,
      }}
    >
      <Box
        sx={{
          border: 1,
          borderColor: "grey",
          padding: (theme) => `${theme.spacing(1)} 0 0 0`,
        }}
      >
        <Grid container spacing={2}>
          <Grid
            sm={12}
            md={6}
            lg={6}
            sx={{
              borderRight: 1,
              borderRightColor: "grey.700",
            }}
          >
            <Box sx={{ minHeight: "70%" }}>Demo goes here</Box>
            <Divider />
            <Box
              sx={{
                minHeight: "30%",
                float: "right",
                marginTop: (theme) => theme.spacing(2),
              }}
            >
              <Typography
                sx={{
                  lineHeight: 3.5,
                  margin: (theme) =>
                    `0 ${theme.spacing(1)} 0 ${theme.spacing(1)}`,
                }}
                variant="body1"
                component="span"
              >
                Source code{" "}
                <Link
                  href="https://github.com/SVaeth/Personal-Portfolio"
                  target="_blank"
                >
                  here
                </Link>
              </Typography>
              <FormControl
                sx={{
                  m: 1,
                  minWidth: 120,
                  margin: (theme) =>
                    `0 ${theme.spacing(1)} 0 ${theme.spacing(1)}`,
                }}
              >
                <InputLabel id="demo-space-select-lang">Language</InputLabel>
                <Select
                  labelId="demo-space-select-lang"
                  value={selectedLang}
                  label="Language"
                  onChange={(event) => setSelectedLang(event.target.value)}
                >
                  {languages.map((lang) => (
                    <MenuItem value={lang}>{lang}</MenuItem>
                  ))}
                </Select>
              </FormControl>
              <Button
                sx={{
                  margin: (theme) =>
                    `0 ${theme.spacing(1)} 0 ${theme.spacing(1)}`,
                  visibility: !!selectedLang ? "visible" : "hidden",
                }}
              >
                Run
              </Button>
            </Box>
          </Grid>
          <Grid sm={12} md={6} lg={6}>
            <Typography align="center" variant="h5">
              {title}
            </Typography>
            <StyledDivider />
            <SupportedLanguagesSection title={title} languages={languages} />
            <StyledDivider />
            <TagsSection demo={demo} perLineGridItems={{ md: 6, lg: 6 }} />
          </Grid>
        </Grid>
        <Divider />
        <Accordion disableGutters>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Console</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <ConsoleView selectedLang={selectedLang} open={showConsole} />
          </AccordionDetails>
        </Accordion>
      </Box>
    </Box>
  );
};

export default DemoPane;
