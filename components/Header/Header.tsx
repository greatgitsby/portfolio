import { Avatar, Badge, Box, Fab, Stack, Tooltip, Typography } from "@mui/material";
import { NextPage } from "next";
import ArticleIcon from '@mui/icons-material/Article';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

interface HeaderProps {
  avatar: string;
  github: string;
  linkedin: string;
  email: string;
  resume: string;
};

const Header: NextPage<HeaderProps> = (props) => {
  const avatar = props.avatar;
  const email = props.email;
  const github = props.github;
  const linkedin = props.linkedin;
  const resume = props.resume;

  return (
    <Stack
      flexShrink={0}
      spacing={3}
    >
      <Typography
        align="center"
        fontWeight="bold"
        variant="h3"
        color="secondary"
      >
        Trey Moen
      </Typography>

      <Stack
        direction="row"
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
            width: {
              xs: 200,
              sm: 350
            },
            height: {
              xs: 200,
              sm: 350
            }
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
        variant="h6"
        color="secondary"
      >
        Student for life
      </Typography>
    </Stack>
  );
};

export default Header;