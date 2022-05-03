import { Box } from "@mui/material";
import { NextPage } from "next";
import { FC, ReactNode } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

// @ts-ignore
import solarized from "react-syntax-highlighter/dist/cjs/styles/prism/solarized-dark-atom";

interface CodeProps {
  children: ReactNode[];
  inline?: boolean;
  className?: String;
};

// TODO Fix type
// Pre is now a transparent element, effectively "remove" it
// in the DOM
export const pre = ({ children }) => {
  return children;
};

export const code: FC<CodeProps> = ({ className, inline = false, children }) => {
  /* ... */
  const defaultLanguage = "";
  const language = className ? className.split("-")[1] : defaultLanguage;

  if (inline) {
    return (
      <Box
        component="code"
        sx={{
          backgroundColor: (theme) => `${theme.palette.secondary.main}40`,
          wordWrap: "break-word",
          boxDecorationBreak: "clone",
          padding: ".1rem .3rem .2rem",
          borderRadius: ".2rem"
        }}
      >
        {children}
      </Box>
    );
  }

  // Trim trailing newlines on all
  // strings
  children = children.map((c) => {
    if (typeof c === "string") {
      c = c.trim();
    }

    return c;
  });

  return (
    <SyntaxHighlighter
      showLineNumbers
      language={language}
      style={solarized}
    >
      {children}
    </SyntaxHighlighter>
  );
};