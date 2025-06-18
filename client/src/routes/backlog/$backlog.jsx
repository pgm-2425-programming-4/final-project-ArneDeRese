import { createFileRoute } from "@tanstack/react-router";
import { PaginatedBacklogList } from "../../components/app/pagination-backlog/paginated-backlog-list";

export const Route = createFileRoute("/backlog/$backlog")({
  component: RouteComponent,
});

function RouteComponent() {
  return <PaginatedBacklogList />;
}
