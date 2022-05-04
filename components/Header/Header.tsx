import Avatar from "@mui/material/Avatar";
import Fab from "@mui/material/Fab";
import Stack from "@mui/material/Stack";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";

import ArticleIcon from '@mui/icons-material/Article';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import type { FC } from "react";

interface HeaderProps {
  avatar: string;
  github: string;
  linkedin: string;
  email: string;
  resume: string;
};

const Header: FC<HeaderProps> = (props) => {
  const avatar = props.avatar;
  const email = props.email;
  const github = props.github;
  const linkedin = props.linkedin;
  const resume = props.resume;

  return (
    <Stack
      spacing={3}
      width="100%"
    >
      <Stack
        direction="row"
        justifyContent="space-between"
      >
        <Stack
          justifyContent="space-between"
        >
          <Tooltip title="GitHub">
            <Fab
              color="secondary"
              href={github}
              target="_blank"
            >
              <GitHubIcon />
            </Fab>
          </Tooltip>

          <Tooltip title="LinkedIn">
            <Fab
              color="secondary"
              href={linkedin}
              target="_blank"
            >
              <LinkedInIcon />
            </Fab>

          </Tooltip>
        </Stack>
        <Avatar
          src={avatar}
          sx={{
            flexGrow: 1,
            maxWidth: 350,
            height: "auto"
          }}
        />
        <Stack
          justifyContent="space-between"
        >
          <Tooltip title="Résumé">
            <Fab
              color="secondary"
              href={resume}
              target="_blank"
            >
              <ArticleIcon />
            </Fab>
          </Tooltip>

          <Tooltip title={email}>
            <Fab
              color="secondary"
              href={`mailto:${email}`}
            >
              <EmailIcon />
            </Fab>
          </Tooltip>
        </Stack>
      </Stack>

      <Typography
        align="center"
        fontWeight="bold"
        variant="h2"
        sx={{
          background: (theme) => `linear-gradient(90deg, ${theme.palette.primary.contrastText}, ${theme.palette.primary.main})`,
          backgroundClip: "text",
          WebkitTextFillColor: "transparent"
        }}
      >
        Trey Moen
      </Typography>
    </Stack>
  );
};

export default Header;