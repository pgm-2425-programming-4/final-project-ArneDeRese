import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { fetchProjectId } from "../../data/fetch-project";

export const Route = createFileRoute("/projects/$projects")({
  loader: async () => {
    const data = await fetchProjectId();
    if (!data) {
      throw notFound();
    }
    return data;
  },
  component: RouteComponent,
  notFoundComponent: () => <div>User not found</div>,
});

function RouteComponent() {
  const projectsData = Route.useLoaderData();

  return (
    <div>
      {projectsData.data.map((project) => (
        <Link
          key={project.id}
          to="/projects/projects-id/$projectsId"
          params={{ projectsId: project.id }}
        >
          <h1>{project.Title}</h1>
        </Link>
      ))}
    </div>
  );
}
