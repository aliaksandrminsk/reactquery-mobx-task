import {useParams} from "react-router";
import {Link} from "react-router-dom";
import PlaceholderListItem from "./PlaceholderListItem";
import styles from "./PlaceholderDetails.module.css";
import React from 'react';

const PlaceholderDetails = () => {
    const {id} = useParams<{ id: string }>();
    return (
        <>
            <Link to="/" className={styles["nav-bar"]}>
                &lt; Back to the list
            </Link>
            {id ? <PlaceholderListItem id={id}/> : null}
        </>
    );
};

export default PlaceholderDetails;
