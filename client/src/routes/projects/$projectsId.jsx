import { createFileRoute, notFound, } from "@tanstack/react-router";
import { fetchProjectId } from "../../data/fetch-project-by-id";

export const Route = createFileRoute("/projects/$projectsId")({
  loader: async ({ params }) => {
    const data = await fetchProjectId(params.projectsId);
    if (!data) {
      throw notFound();
    }
    return data;
  },
  component: RouteComponent,
  notFoundComponent: () => <div>User not found</div>,
});

function RouteComponent() {
  const data = Route.useLoaderData();
  return (
   <div>
    {data.title}
   </div>
    
  );
}