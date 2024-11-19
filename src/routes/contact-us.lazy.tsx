import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/contact-us")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div className="p-2">Hello from About!</div>;
}
