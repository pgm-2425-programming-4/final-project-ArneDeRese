import { createRootRoute, Link, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'

export const Route = createRootRoute({
  component: () => (
    <>
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
        </ul>
    </nav>
      <Outlet />
      <TanStackRouterDevtools />
    </>
  ),
})