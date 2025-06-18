import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <section className="section">
      <div className="container has-text-centered">
        <h1 className="title is-2">Over dit project</h1>
        <p className="subtitle is-5 mt-4">
          Dit is mijn project voor <strong>PGM-4</strong>. Het is een takenbord-applicatie waarin je taken kunt toevoegen, bijwerken en bekijken. Gebouwd met <code>TanStack Router</code>, <code>React</code> en <code>Bulma</code>.
        </p>
      </div>
    </section>
  );
}
