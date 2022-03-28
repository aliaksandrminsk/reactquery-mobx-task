import { useStore } from "../stores";
import PlaceholderList from "./PlaceholderList";
import styles from "./Placeholder.module.css";
import { observer } from "mobx-react-lite";
import React from "react";

const Placeholder = () => {
  const { app } = useStore();

  const filter = (e: any) => {
    if (!app.searchQuery.trim()) {
      return true;
    }

    return new RegExp(app.searchQuery, "i").test(e.title);
  };

  return (
    <>
      <input
        placeholder="Enter the name of a item"
        className={styles.input}
        onChange={(e) => app.handleSearchQueryChange(e.target.value)}
      />
      <PlaceholderList filter={filter} />
    </>
  );
};

export default observer(Placeholder);
