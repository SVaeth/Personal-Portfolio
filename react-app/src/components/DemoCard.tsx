import { Card, CardContent, Divider, styled, Typography, Box } from "@mui/material";
import React from "react";
import { observer } from "mobx-react-lite";
import { Link, useNavigate } from "react-router-dom";
import { DemoInfoType } from "../stores/DemoInfo";
import TagsSection from "./demo-details-sections/TagsSection";
import SupportedLanguagesSection from "./demo-details-sections/SupportedLanguagesSection";

type DemoCardProps = React.HTMLAttributes<HTMLDivElement> & {
  demo: DemoInfoType;
};

type TitleViewType = (props: { title: string }) => JSX.Element;

const StyledDivider = styled(Divider)(({ theme }) => ({
  padding: 0
}));

const TitleView: TitleViewType = observer(({ title }) => {
  const navigate = useNavigate();

  return (
    <Typography
      align="center"
      variant="h5"
      component="div"
      onClick={() => navigate(`demo/${title}`)}
    >
      {title}
    </Typography>
  );
});

const DemoCard: React.FC<DemoCardProps> = ({ demo }) => {
  const { title, languages } = demo;

  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent 
      sx={{
        padding: 0,
        "& > *": {
          padding: (theme) => theme.spacing(1)
        }
      }}>
        <Box
          sx={{
            padding: (theme) => `${theme.spacing(1)} 0`,
            "&:hover": {
              cursor: 'pointer',
              transition: '0.2s',
              backgroundColor: (theme) => theme.palette.grey["500"],
            },
          }}
        >
          <TitleView title={title} />
        </Box>
        <StyledDivider />
        <SupportedLanguagesSection title={title} languages={languages} />
        <StyledDivider />
        <TagsSection demo={demo} />
      </CardContent>
    </Card>
  );
};

export default DemoCard;
