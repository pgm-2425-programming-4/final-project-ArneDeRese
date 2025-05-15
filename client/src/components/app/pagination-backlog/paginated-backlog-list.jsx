import { useState } from "react";
import { PAGE_SIZE_OPTIONS } from "../../../constants/constants";

export function PaginatedBacklogList() {
    const [currentPage, setCurrentPage] = useState(1);
    const [pageCount, setPageCount] = useState(1);
    const [pageSize, setPageSize] = useState(PAGE_SIZE_OPTIONS[0]);
    const [backlogs, setBacklogs] = useState([]);

    function handlePageChanged(pageNumber) {
        setCurrentPage(pageNumber)
    }

    function handlePageSizeChanged(size) {
        setPageSize(size)
    }
}