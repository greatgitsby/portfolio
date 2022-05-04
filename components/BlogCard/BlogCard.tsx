import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActionArea from "@mui/material/CardActionArea";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import type { FC } from "react";
import Link from "next/link";

interface BlogCardProps {
  title: string;
  date: Date | string;
  desc: string;
  url: string;
};

const BlogCard: FC<BlogCardProps> = (props) => {
  const title = props.title;
  const date = typeof props.date === "string" ? props.date : props.date.toLocaleDateString();
  const desc = props.desc;
  const url = props.url;

  return (
    <Card
      sx={{
        backgroundColor: "primary.main",
        borderRadius: "25px",
      }}
    >
      <Link href={url} passHref>
        <CardActionArea
        >
          <CardContent>
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="flex-end"
            >
              <Typography
                variant="h5"
                fontWeight="bold"
                whiteSpace="nowrap"
                overflow="hidden"
                textOverflow="ellipsis"
                color="primary.contrastText"
              >
                {title}
              </Typography>
              <Typography
                variant="subtitle1"
                fontWeight="light"
                color="primary.contrastText"
              >
                {date}
              </Typography>
            </Stack>

            <Typography
              variant="body1"
              fontWeight="light"
              color="primary.contrastText"
            >
              {desc}
            </Typography>
          </CardContent>

        </CardActionArea>
      </Link>
    </Card>
  );
};

export default BlogCard;