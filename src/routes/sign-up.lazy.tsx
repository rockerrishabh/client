import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/sign-up")({
  component: RouteComponent,
});

function RouteComponent() {
  return "Hello /sign-up!";
}
