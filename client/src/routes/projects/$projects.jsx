import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { fetchProjectId } from "../../data/fetchProject";

export const Route = createFileRoute("/projects/$projects")({
  loader: async () => {
    const data = await fetchProjectId();
    if (!data) {
      throw notFound();
    }
    return data;
  },
  component: RouteComponent,
  notFoundComponent: () => (
    <div className="notification is-danger">User not found</div>
  ),
});

function RouteComponent() {
  const projectsData = Route.useLoaderData();

  return (
    <section className="section">
      <div className="container">
        <h1 className="title is-3 has-text-centered">Projecten</h1>

        <div className="columns is-multiline">
          {projectsData.data.map((project) => (
            <div key={project.id} className="column is-half">
              <Link to={`/board/${project.id}`}>
                <div className="box has-background-light has-text-black">
                  <h2 className="title is-5">{project.Title}</h2>
                  <p>Klik om taken te bekijken</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
