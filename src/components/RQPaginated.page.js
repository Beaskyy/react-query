import axios from "axios";
import React, { useState } from "react";
import { useQuery } from "react-query";

const fetchColors = (pageNumber) => {
  return axios.get(`http://localhost:4000/colors?_limit=2&_page=${pageNumber}`);
};

const RQPaginatedPage = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const { data, isLoading, isError, error } = useQuery(
    ["colors", pageNumber],
    () => fetchColors(pageNumber), {
      keepPreviousData: true,
    }
  );
  if (isLoading) <h2>Loading...</h2>;
  if (isError) <h2>{error.message}</h2>;

  return (
    <div>
      {data?.data.map(({ id, label }) => (
        <div key={id}>
          <p>label: {label}</p>
        </div>
      ))}

      <div>
        <button
          onClick={() => setPageNumber(pageNumber - 1)}
          disabled={pageNumber === 1}
        >
          Previous
        </button>
        <button
          onClick={() => setPageNumber(pageNumber + 1)}
          disabled={pageNumber === 4}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default RQPaginatedPage;
