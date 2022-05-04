import Box from "@mui/material/Box";
import Card from "@mui/material/Card";

import { FC } from "react";

interface BlockQuoteProps {
  children: any;
};

export const blockquote: FC<BlockQuoteProps> = (props) => {
  return (
    <Card
      raised
      sx={{
        margin: "20px 0px 20px 0px",
      }}
    >
    <Box
      component="div"
      sx={{
        borderLeft: (theme) => `8px ${theme.palette.primary.main} solid`,
        padding: "12px",
        backgroundColor: "#ddd",
        color: "#444"
      }}
    >
      {props.children}
    </Box>
  </Card>
  );
};