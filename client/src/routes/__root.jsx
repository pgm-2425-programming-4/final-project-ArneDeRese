import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

const queryClient = new QueryClient();

function NotFound() {
  return <div className="notification is-danger">Pagina niet gevonden</div>;
}

export const Route = createRootRoute({
  component: () => (
    <QueryClientProvider client={queryClient}>
      <nav className="navbar is-primary" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <Link to="/" className="navbar-item has-text-weight-bold">
            Mijn App
          </Link>
        </div>
        <div className="navbar-menu">
          <div className="navbar-start">
            <Link to="/" className="navbar-item">
              Home
            </Link>
            <Link to="/about" className="navbar-item">
              About
            </Link>
            <Link to="/projects/$projectsId" className="navbar-item">
              Projects
            </Link>
            <Link to="/backlog/$backlog" className="navbar-item">
              Backlog
            </Link>
            <Link to="/post/nieuw" className="navbar-item">
              Add new task
            </Link>
          </div>
        </div>
      </nav>

      <section className="section">
        <div className="container">
          <Outlet />
        </div>
      </section>

      <TanStackRouterDevtools />
    </QueryClientProvider>
  ),
  notFoundComponent: NotFound,
});
