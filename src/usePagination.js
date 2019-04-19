import { useEffect, useState } from "react";

const usePagination = ({ initialPage = 1, perPage = 5, handleChange }) => {
  const [page, setPage] = useState(initialPage);

  useEffect(() => {
    handleChange({ page, perPage });
  }, [handleChange, page, perPage]);

  return [page, () => setPage(page + 1)];
};

export default usePagination;
