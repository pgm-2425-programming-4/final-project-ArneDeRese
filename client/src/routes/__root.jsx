import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

const queryClient = new QueryClient();

function NotFound() {
  return <div>Pagina niet gevonden</div>;
}

export const Route = createRootRoute({
  component: () => (
    <QueryClientProvider client={queryClient}>
      {
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/projects/$projectsId">Projects</Link>
            </li>
            <li>
              <Link to="/backlog/$backlog">Backlog</Link>
            </li>
            <li>
              <Link to="/post/$post">Add new task</Link>
            </li>
          </ul>
        </nav>
      }
      <Outlet />
      <TanStackRouterDevtools />
    </QueryClientProvider>
  ),
  notFoundComponent: NotFound,
});
