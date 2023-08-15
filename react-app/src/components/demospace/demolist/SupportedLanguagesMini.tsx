import { Typography } from '@mui/material';
import React from 'react';

type SupportedLanguagesMiniProps = React.HTMLAttributes<HTMLDivElement> & {
    languages: string[]
}

const SupportedLanguagesMini: React.FC<SupportedLanguagesMiniProps> = ({languages}) => (
    <>
          <Typography sx={{ paddingBottom: (theme) => theme.spacing(1) }} color={"text.secondary"}>Languages</Typography>
    </>
);

export default SupportedLanguagesMini;