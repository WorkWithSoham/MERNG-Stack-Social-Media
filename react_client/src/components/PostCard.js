import React from "react";
import { Card, Button, Image, Icon, Label } from "semantic-ui-react";
import moment from "moment";

export default function PostCard({
  post: { body, createdAt, username, comments, likes, id },
}) {
  function likePost() {
    console.log("Liked");
  }

  function commentOnPost() {
    console.log("commented");
  }

  return (
    <Card>
      <Card.Content>
        <Image
          floated="right"
          size="mini"
          src="https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png"
        />
        <Card.Header>{username}</Card.Header>
        <Card.Meta>{moment(createdAt).fromNow()}</Card.Meta>
        <Card.Description>{body}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div>
          <Button as="div" labelPosition="right" onClick={likePost}>
            <Button color="blue" basic>
              <Icon name="heart" />
            </Button>
            <Label as="a" basic color="blue" pointing="left">
              {likes.length}
            </Label>
          </Button>
          <Button as="div" labelPosition="right" onClick={commentOnPost}>
            <Button color="green" basic>
              <Icon name="comments" />
            </Button>
            <Label as="a" basic color="green" pointing="left">
              {comments.length}
            </Label>
          </Button>
        </div>
      </Card.Content>
    </Card>
  );
}
