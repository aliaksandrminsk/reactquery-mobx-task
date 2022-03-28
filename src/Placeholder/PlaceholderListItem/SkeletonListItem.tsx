import Skeleton from "../../Skeleton";
import styles from "./PlaceholderListItem.module.css";
import React from "react";

const SkeletonListItem = () => (
  <div className={styles["item-container"]}>
    <Skeleton style={{ width: "20%", height: 21 }} />
    <Skeleton style={{ width: "100%", height: 21 }} />
  </div>
);

export default SkeletonListItem;
