import { createFileRoute } from "@tanstack/react-router";
import { Create } from "../../components/app/post/post";

export const Route = createFileRoute("/post/$post")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <Create />
    </div>
  );
}
