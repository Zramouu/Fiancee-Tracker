import { Box, Typography, useTheme } from "@mui/material";
import React from "react";
import FlexBetween from "./FlexBetween";

type Props = {
  title: string;
  sideText: string;
  subtitle?: string;
  icon?: React.ReactNode;
  titlestyle?: React.CSSProperties;
  subtitlestyle?: React.CSSProperties; 
  sidestyle?: React.CSSProperties;
};

const BoxHeader = ({ icon, title, subtitle, sideText, titlestyle, subtitlestyle, sidestyle}: Props) => {
  const { palette } = useTheme();
  return (
    <FlexBetween color={palette.grey[400]} margin="1.5rem 1rem 0 1rem">
      <FlexBetween>
        {icon}
        <Box width="100%">
        <Typography variant="h4" mb="-0.1rem" style={titlestyle}>
          {title}
        </Typography>

          <Typography variant="h6" style={subtitlestyle}>{subtitle}</Typography>
        </Box>
      </FlexBetween>
      <Typography variant="h5" fontWeight="700" style={sidestyle}>
        {sideText}
      </Typography>
    </FlexBetween>
  );
};

export default BoxHeader;