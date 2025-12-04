import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

const RootComponent = () => {
  <div>
    <nav style={{ padding: "1rem", borderBottom: "1px solid #ccc" }}>
      <Link to="/" style={{ marginRight: "1rem" }}>
        Home
      </Link>
      <Link to="/about">About</Link>
    </nav>
    <div style={{ padding: "1rem" }}>
      <Outlet />
    </div>
    <TanStackRouterDevtools />
  </div>;
};

export const Route = createRootRoute({
  component: RootComponent,
});
