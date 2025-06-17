import { useEffect, useState } from "react";
import { PAGE_SIZE_OPTIONS } from "../../../constants/constants.js";
import { fetchBacklog } from "../../../data/fetchBacklog.js";
import { useQuery } from "@tanstack/react-query";
import { BacklogList } from "./backlog-list/backlog-list.jsx";
import { Pagination } from "./pagination/pagination.jsx";


export function PaginatedBacklogList() {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageCount, setPageCount] = useState(1);
  const [pageSize, setPageSize] = useState(PAGE_SIZE_OPTIONS[0]);
  const [tasks , setBacklogs] = useState([]);

  function handlePageChanged(pageNumber) {
    setCurrentPage(pageNumber);
  }

  function handlePageSizeChanged(size) {
    setPageSize(size);
  }

  const { isPending, isError, error, data } = useQuery({
    queryKey: ["tasks", { currentPage, pageSize }],
    queryFn: () => fetchBacklog(currentPage, pageSize),
  });

  useEffect(() => {
    if (data) {
      if (currentPage > data.meta.pagination.pageCount) {
        setCurrentPage(data.meta.pagination.pageCount);
      }
      setBacklogs(data.data);
      setPageCount(data.meta.pagination.pageCount);
    }
  }, [data, currentPage]);

  if (isPending) {
    return <p>Loading...</p>;
  }
  if (isError) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <>
      <div>
        <BacklogList tasks={tasks} />
      </div>
      <Pagination
        currentPage={currentPage}
        pageCount={pageCount}
        pageSize={pageSize}
        onPageChanged={handlePageChanged}
        onPageSizeChanged={handlePageSizeChanged}
      />
    </>
  );
}
