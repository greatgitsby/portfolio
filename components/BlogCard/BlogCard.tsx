import { Card, CardContent, CardActionArea, Stack, Typography } from "@mui/material";
import { FC } from "react";

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
        width: {
          xs: "90%",
          sm: "70%",
          md: "50%"
        },
      }}
    >
      <CardActionArea
        href={url}
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
              maxWidth="60%"
            >
              {title}
            </Typography>
            <Typography
              variant="subtitle1"
              fontWeight="light"
            >
              {date}
            </Typography>
          </Stack>

          <Typography
            variant="body1"
            fontWeight="light"
          >
            {desc}
          </Typography>
        </CardContent>

      </CardActionArea>
    </Card>
  );
};

export default BlogCard;