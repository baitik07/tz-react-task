import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import CommentModal from "./CommentModal";

const PostItem = ({ item }) => {
  return (
    <Card
      sx={{
        maxWidth: 345,
      }}
    >
      <Link to={`/details/${item.id}`}>
        <CardMedia
          component="img"
          alt="green iguana"
          height="140"
          image="https://s26162.pcdn.co/wp-content/uploads/2019/12/Kulikov_Writer_E.N.Chirikov_1904.jpg"
        />
      </Link>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {item.author}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {item.content}
        </Typography>
      </CardContent>
      <CardActions>
        <CommentModal item={item} />
        <Link to={`/details/${item.id}`}>
          <Button size="small">Learn More</Button>
        </Link>
      </CardActions>
    </Card>
  );
};

export default PostItem;
