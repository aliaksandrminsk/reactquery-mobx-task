import { useQuery } from "react-query";
import { detailFetcher } from "../../Api";
import PlaceholderListItem from "./PlaceholderListItem";
import SkeletonListItem from "./SkeletonListItem";
import React from "react";
import { Constants } from "../../constants";

const PlaceholderListItemWrapper = ({ id }: { id: string }) => {
  const { data, isLoading } = useQuery(["item-detail", id], detailFetcher(id), {
    staleTime: Constants.UPDATE_INTERVAL,
  });
  return (
    <>
      {!isLoading ? <PlaceholderListItem data={data} /> : <SkeletonListItem />}
    </>
  );
};

export default PlaceholderListItemWrapper;
