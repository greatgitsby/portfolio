import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

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
        paddingLeft: "2rem",
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
        paddingLeft: "2rem",
        listStyleType: "decimal"
      }}
    >
      {children}
    </List>
  );
};