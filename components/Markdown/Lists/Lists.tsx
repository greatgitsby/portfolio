import { List, ListItem, ListItemText, Typography } from "@mui/material"

export const li = ({ children }) => {
  return (
    <ListItem
      disablePadding
      disableGutters
    >
      <ListItemText
        sx={{
          display: "list-item",
          "::marker": {
            fontFamily: (theme) => theme.typography.fontFamily
          }
        }}
      >
        {children}
      </ListItemText>
    </ListItem>

  );
};

export const ul = ({ children }) => {
  return (
    <List
      sx={{
        paddingLeft: "3rem",
        listStyleType: "disc"
      }}
    >
      {children}
    </List>
  );
};

export const ol = ({ children }) => {
  return (
    <List
      sx={{
        paddingLeft: "3rem",
        listStyleType: "decimal"
      }}
    >
      {children}
    </List>
  );
};