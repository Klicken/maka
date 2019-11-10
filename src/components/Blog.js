import React from "react";
import {
  makeStyles,
  Paper,
  Divider,
  Grid,
  Typography
} from "@material-ui/core";
import BlogPost from "./BlogPost";

const useStyles = makeStyles(theme => ({
  sidebarAboutBox: {
    padding: theme.spacing(2),
    backgroundColor: theme.palette.grey[100]
  },
  archives: {
    marginTop: "24px"
  },
  post: {
    padding: theme.spacing(2)
  }
}));

const posts = [
  {
    id: 1,
    title: "Post title 1",
    date: "Nov 12",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content."
  },
  {
    id: 2,
    title: "Post title 2",
    date: "Nov 11",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content."
  },
  {
    id: 3,
    title: "Post title 3",
    date: "Nov 11",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content."
  }
];

export default function Blog() {
  const classes = useStyles();

  return (
    <Grid container spacing={5} className={classes.mainGrid}>
      <Grid item xs={12} md={8}>
        <Typography variant="h6" gutterBottom>
          Blog
        </Typography>
        <Divider />
        {posts.map(post => (
          <BlogPost
            className={classes.post}
            title={post.title}
            date={post.date}
            description={post.description}
            key={post.id}
          />
        ))}
      </Grid>
      <Grid item xs={12} md={4}>
        <Paper elevation={0} className={classes.sidebarAboutBox}>
          <Typography variant="h6" gutterBottom>
            About
          </Typography>
          <Typography>
            This blog is dedicated to my everyday ideas, and the stuff that I'm
            working on.
            <br/>
            <br/>
            Primarily this is just a project to test React and AWS out.
          </Typography>
        </Paper>
      </Grid>
    </Grid>
  );
}