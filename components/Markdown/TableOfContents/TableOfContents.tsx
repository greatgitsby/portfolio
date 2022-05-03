import { Box, Card, Container, Stack, Typography } from "@mui/material";

export const nav = ({ children }) => {
  const shouldRenderTable = children[0].props.node.children.length > 0;

  // TODO this might be hacky
  if (!shouldRenderTable) {
    return (<Box></Box>);
  }

  return (
    <Box
      sx={{
        "> ul": {
          width: "75%",
          margin: "auto",
        }
      }}
    >
      <Card
        raised
        sx={{
          margin: "auto",
          maxWidth: "80%",
          backgroundColor: "primary.main",
          padding: "15px 15px 0px 15px",
          borderRadius: "25px"
        }}
      >
        <Typography variant="h4" align="center">
          Table of Contents
        </Typography>
        <Box
          display="flex"
          alignSelf="center"
          justifyContent={"center"}
        >
          {children}
        </Box>
      </Card>
    </Box>
  );
};