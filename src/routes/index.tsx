import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <p>Welcome to TanStack Router with pnpm!</p>
    </div>
  );
}
