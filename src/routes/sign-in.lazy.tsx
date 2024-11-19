import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/sign-in")({
  component: RouteComponent,
});

function RouteComponent() {
  return "Hello /sign-in!";
}
