import { Typography, Card } from "antd";
import React, { useState, useEffect } from "react";
import ListItemComponent from "../components/ListItemComponent";
import { getItem, setItem } from "../helper/local-storage";

export default function FavoriteAuthors() {
  const getData = getItem("myFavorite");

  const [items, setItems] = useState(getData);

  useEffect(() => {
    setItem("myFavorite", items);
  }, [items]);

  function removeFavorite(id) {
    let current = items.filter((item) => item._id !== id);
    console.log(current);

    setItems([...current]);
  }

  return (
    <>
      {items.length ? (
        <ListItemComponent authors={items} removeFavorite={removeFavorite} />
      ) : (
        <Card style={{ width: 400,margin:'auto' }}>
          <Typography.Title level={5}>
            You have not selected any authors as favorite yet.
          </Typography.Title>
        </Card>
      )}
    </>
  );
}
