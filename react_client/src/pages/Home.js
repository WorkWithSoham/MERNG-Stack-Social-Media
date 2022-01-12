import React from "react";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
import { Grid } from "semantic-ui-react";

import PostCard from "../components/PostCard";

const FETCH_POSTS_QUERY = gql`
  {
    getPosts {
      id
      username
      body
      createdAt
      likes {
        username
      }
      comments {
        id
        username
        createdAt
        body
      }
    }
  }
`;

function Home() {
  const { loading, error, data } = useQuery(FETCH_POSTS_QUERY);

  if (data) {
    var { getPosts: posts } = data;
  }

  if (error) {
    console.log(error);
  }

  return (
    <Grid columns={3}>
      <Grid.Row>
        <h1>Recent Posts</h1>
      </Grid.Row>
      <Grid.Row>
        {loading ? (
          <h1>Loading Posts ...</h1>
        ) : (
          posts &&
          posts.map((post) => {
            return (
              <Grid.Column key={post.id}>
                <PostCard post={post} />
              </Grid.Column>
            );
          })
        )}
      </Grid.Row>
    </Grid>
  );
}

export default Home;
