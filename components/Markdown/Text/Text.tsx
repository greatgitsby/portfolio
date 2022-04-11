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
  const variant = `h${Math.min(level, 6) + 1}` as Variant;
  const align = variant === "h2" ? "center" : undefined;

  return (
    <Typography
      marginTop="2rem"
      marginBottom=".5rem"
      id={id}
      variant={variant}
      align={align}
    >
      {children}
    </Typography>
  );
};

const Text: HeadingComponentWithId = ({ children, id }) => {
  const variant = `body1` as Variant;

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
