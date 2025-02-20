import axios from "axios";
import React, { Fragment, useState } from "react";
import { useInfiniteQuery } from "react-query";

const fetchColors = ({ pageParam = 1 }) => {
  return axios.get(`http://localhost:4000/colors?_limit=2&_page=${pageParam}`);
};

const RQInfinite = () => {
  const {
    data,
    isLoading,
    isError,
    error,
    isFetching,
    hasNextPage,
    isFetchingNextPage,
    fetchNextPage,
  } = useInfiniteQuery(["colors"], fetchColors, {
    getNextPageParam: (_lastpage, pages) => {
      if (pages.length < 4) {
        return pages.length + 1;
      } else {
        return undefined;
      }
    },
  });
  if (isLoading) <h2>Loading...</h2>;
  if (isError) <h2>{error.message}</h2>;

  return (
    <div>
      {data?.pages.map((group, i) => (
        <Fragment>
          {group.data.map(({ id, label }) => (
            <h2 key={id}>{label}</h2>
          ))}
        </Fragment>
      ))}

      <button disabled={!hasNextPage} onClick={fetchNextPage}>
        Load more
      </button>
      {isFetching && !isFetchingNextPage ? "loading..." : null}
    </div>
  );
};

export default RQInfinite;
