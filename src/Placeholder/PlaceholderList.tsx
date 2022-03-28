import { useInfiniteQuery } from "react-query";
import { Link } from "react-router-dom";
import { listFetcher } from "../Api";
import PlaceholderListItem from "./PlaceholderListItem";
import { observer } from "mobx-react-lite";
import styles from "./PlaceholderList.module.css";
import { useStore } from "../stores";
import { useEffect } from "react";
import React from "react";
import { Constants } from "../constants";

const PlaceholderList = ({ filter }: any) => {
  const { app } = useStore();

  const { data, isLoading, fetchNextPage, hasNextPage } = useInfiniteQuery(
    "items-list",
    listFetcher(),
    {
      staleTime: Constants.UPDATE_INTERVAL,
      getNextPageParam: (lastPage) => {
        if ((lastPage.page + 1) * Constants.PAGE_SIZE < Constants.MAX_ITEMS) {
          return lastPage.page + 1;
        }
      },
    }
  );

  useEffect(() => {
    window.scrollTo(0, app.scrollPositionY);
  }, [app]);

  const handleItemClick = () => {
    app.handleScrollPositionChange(window.scrollY);
  };

  return (
    <>
      {!isLoading &&
        data?.pages.map((d) =>
          d.results.filter(filter).map((e: any) => (
            <Link
              to={`/posts/${e.id}`}
              key={e.id.toString()}
              className={styles["item-link"]}
              onClick={handleItemClick}
            >
              <PlaceholderListItem id={e.id.toString()} />
            </Link>
          ))
        )}

      {hasNextPage && (
        <button
          className={styles["load-more-btn"]}
          onClick={() => fetchNextPage()}
        >
          Load More
        </button>
      )}
    </>
  );
};

export default observer(PlaceholderList);
