import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <section className="section">
      <div className="container">
        <h1 className="title is-2 has-text-centered">Welkom</h1>
      </div>
    </section>
  );
}