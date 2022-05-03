import { Box, Stack, Typography } from "@mui/material";
import { NextPage } from "next";

interface FooterProps {

};

const Footer: NextPage<FooterProps> = (props) => {
  return (
    <Box
      component="footer"
      bgcolor="primary.contrastText"
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
          color="white"
        >
          {`Trey Moen ⸱ ${new Date().getFullYear()}`}
        </Typography>
    </Box>
  );
};

export default Footer;