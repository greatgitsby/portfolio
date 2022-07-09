import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import type { FC } from "react";

const Footer: FC = () => {
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