import { Constants } from "./constants";

export const detailFetcher = (id: string) => async () => {
  const details = await fetch(Constants.BASE_URL + "/posts/" + id).then((res) =>
    res.json()
  );
  return { ...details };
};

export const listFetcher =
  () =>
  async ({ pageParam = 0 }) => {
    return await fetch(
      Constants.BASE_URL +
        "/posts?_limit=" +
        Constants.PAGE_SIZE +
        "&_page=" +
        (1 + pageParam)
    )
      .then((res) => res.json())
      .then((res) => ({ results: [...res], page: pageParam }));
  };
