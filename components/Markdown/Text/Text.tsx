import React from "react";
import {
  ReactMarkdownProps,
  ReactNode,
} from "react-markdown/lib/ast-to-react";
import { Typography } from "@mui/material";
import { Variant } from "@mui/material/styles/createTypography";

type HeadingComponentWithId = (
  props: 
    ReactMarkdownProps & {
      level: number;
      id?: string;
    }
) => ReactNode;

const Heading: HeadingComponentWithId = ({ children, id, level }) => {
  const variant = `h${Math.min(level, 6) + 3}` as Variant;
  const align = variant === "h4" ? "center" : undefined;
  const bold = variant === "h4";

  return (
    <Typography
      marginTop="1rem"
      marginBottom=".5rem"
      id={id}
      variant={variant}
      align={align}
      fontWeight={bold ? "bold" : "regular"}
    >
      {children}
    </Typography>
  );
};

const Text: HeadingComponentWithId = ({ children, id }) => {
  const variant = `body1` as Variant;

  // TODO figure out why images get wrapped in a <p>
  // tag. This is no good! Just return children in that case,
  // don't wrap in Typography, we can't have divs in paragraphs.
  if (children.find((c: any) => c.props && c.props.node && c.props.node.tagName === "img")) {
    return children;
  }

  return (
    <Typography id={id} variant={variant}>
      {children}
    </Typography>
  );
};

export const h1 = Heading;
export const h2 = Heading;
export const h3 = Heading;
export const h4 = Heading;
export const h5 = Heading;
export const h6 = Heading;
export const p = Text;
