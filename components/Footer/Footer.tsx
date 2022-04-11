import { Box, Stack, Typography } from "@mui/material";
import { NextPage } from "next";

interface FooterProps {

};

const Footer: NextPage<FooterProps> = (props) => {
  return (
    <Box
      component="footer"
      bgcolor="text.primary"
      height="50px"
      width="100%"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderTopLeftRadius: "25px",
        borderTopRightRadius: "25px",
      }}
    >
        <Typography
          align="center"
          color="text.secondary"
        >
          {"trey <at> moen.ai 🚀 2022"}
        </Typography>
    </Box>
  );
};

export default Footer;