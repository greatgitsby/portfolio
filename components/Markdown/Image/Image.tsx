import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Zoom from "react-medium-image-zoom";

import "react-medium-image-zoom/dist/styles.css";

export const img = ({ src, alt }) => {
  return (
    <Zoom
      wrapStyle={{
        width: '100%'
      }}
    >
      <Stack
        spacing={2}
        sx={{
          margin: "15px auto 15px auto",
          width: {
            xs: "90%",
            sm: "70%",
            md: "50%"
          },
          textAlign: "center",
        }}
      >
        <Card
          raised
        >
          <CardMedia
            component="img"
            image={src}
            alt={alt}
            width={"100%"}
          />
        </Card>

        <Typography
          variant="body2"
          fontStyle="italic"
        >
          {alt}
        </Typography>
      </Stack>
    </Zoom>
  );
};