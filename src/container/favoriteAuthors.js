import { Typography, Card } from "antd";
import React, { useState, useEffect } from "react";
import ListItemComponent from "../components/ListItemComponent";
import { getItem, setItem } from "../helper/local-storage";

export default function FavoriteAuthors() {
  const getData = getItem("myFavorite");

  const [favoriteAuthor, setFavoriteAuthor] = useState(getData);

  useEffect(() => {
    setItem("myFavorite", favoriteAuthor);
  }, [favoriteAuthor]);

  function removeFavorite(id) {
    let current = favoriteAuthor.filter((item) => item._id !== id);

    setFavoriteAuthor([...current]);
  }

  return (
    <>
      {favoriteAuthor.length ? (
        <ListItemComponent
          authors={favoriteAuthor}
          removeFavorite={removeFavorite}
        />
      ) : (
        <Card style={{ width: 400, margin: "auto" }}>
          <Typography.Title level={5}>
            You have not selected any authors as favorite yet.
          </Typography.Title>
        </Card>
      )}
    </>
  );
}
