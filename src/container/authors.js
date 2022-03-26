import React, { useEffect, useState } from "react";
import ListItemComponent from "../components/ListItemComponent";
import { Pagination } from "antd";
import { setItem, getItem } from "../helper/local-storage";
import { useHistory } from "react-router-dom";
import { getQueryStringValue } from "../helper/query-string";

export default function Authors() {
  let favoriteAuthors = getItem("myFavorite");
  const history = useHistory();
  const [authors, setAuthors] = useState([]);
  const [fetching, setFetching] = useState(false);
  const [totalCount, setTotalCount] = useState(0);
  const [limit, setLimit] = useState(10);
  const [skip, setSkip] = useState(10);
  const [items, setItems] = useState(favoriteAuthors);

  useEffect(() => {
    getAuthors();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [limit, skip]);

  useEffect(() => {
    setItem("myFavorite", items);
  }, [items]);

  // function setupInitialState() {

  //   setLimit(Number(getQueryStringValue("limit")) || 10);
  //   setSkip(Number(getQueryStringValue("skip")) || 10);
  // }

  async function getAuthors() {
    setFetching(true);
    try {
      const pagination = `limit=${limit}&skip=${skip}`;
      history.push(`${history.location.pathname}?${pagination}`);
      const response = await fetch(
        `https://api.quotable.io/authors?${pagination}`
      );

      const { results, totalCount } = await response.json();

      const data =
        results &&
        results.map((author) => {
          return {
            ...author,
            isFavorite: false,
          };
        });
      data.forEach((k) => {
        let isPresent = items.find((item) => item._id === k._id);
        if (isPresent) k.isFavorite = true;
      });

      setAuthors(data);
      setTotalCount(totalCount);

      setFetching(false);
    } catch (err) {
      console.log();
      setFetching(false);
    }
  }
  function addFavorite(id) {
    setAuthors((prevState) => {
      let current = prevState.find((item) => item._id === id);
      current.isFavorite = true;
      setItems([...items, current]);
      return [...prevState];
    });
  }
  function removeFavorite(id) {
    setAuthors((prevState) => {
      let current = prevState.find((item) => item._id === id);
      current.isFavorite = false;

      return [...prevState];
    });
    let current = items.filter((item) => item._id !== id);
    console.log(current);

    setItems([...current]);
  }
  function onPaginationChange(page, pageSize) {
    setSkip(10 * page);
  }

  return (
    <>
      <ListItemComponent
        authors={authors}
        fetching={fetching}
        addFavorite={addFavorite}
        removeFavorite={removeFavorite}
      />
      {authors.length ? (
        <Pagination
          style={{ textAlign: "center" }}
          total={totalCount}
          showSizeChanger={false}
          showQuickJumper={false}
          onChange={onPaginationChange}
        />
      ) : null}
    </>
  );
}
