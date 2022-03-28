import styles from "./PlaceholderListItem.module.css";
import React from "react";

const PlaceholderListItem = ({ data }: any) => (
  <div className={styles["item-container"]}>
    <div>
      <strong>{data.title}</strong>
    </div>
    <div>{data.body}</div>
  </div>
);

export default PlaceholderListItem;
