import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { createRootRoute, Link, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'

const queryClient = new QueryClient()

export const Route = createRootRoute({
  component: () => (
    <QueryClientProvider client={queryClient}>
        {
    <nav>
        <ul>
            <li>
                <Link to="/">
                    Home
                </Link>
            </li>
            <li>
                <Link to="/about">
                    About
                </Link>
            </li>
            <li>
                <Link to="/projects/$projectsId">
                    Projects
                </Link>
            </li>
            <li>
                <Link to="/backlog/$backlog">
                    Backlog
                </Link>
            </li>
        </ul>
    </nav>}
      <Outlet />
      <TanStackRouterDevtools />
    </QueryClientProvider>
  ),
})