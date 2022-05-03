import { Box, Card, CardActionArea, CardMedia, Stack, Typography } from "@mui/material";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

export const img = ({ src, alt }) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        "button": {
          outline: "0 !important"
        }
      }}
    >
      <Zoom>
        <Stack
          spacing={2}
          sx={{
            display: "flex",
            justifyContent: "center",
            margin: "15px 0px 15px 0px",
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
    </Box>
  );
};