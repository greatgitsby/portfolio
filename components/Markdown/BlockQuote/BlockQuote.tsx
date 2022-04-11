import { FC } from "react";
import { Box } from "@mui/material";

interface BlockQuoteProps {
  children: any;
};

export const blockquote: FC<BlockQuoteProps> = (props) => {
  return (
    <Box
      component="div"
      sx={{
        display: "block",
        borderLeft: "10px #222 solid",
        paddingLeft: "15px",
        backgroundColor: "#ccc",
        color: "#444"
      }}
    >

      {props.children}
    </Box>
  );
};