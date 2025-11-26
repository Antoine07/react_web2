import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

import Menu from "@/components/Menu";

const RootLayout = () => (
  <>
    <div className="w-full bg-gray-900 border-b border-gray-800">
      <div className="px-4 py-3 flex items-center gap-4 font-mono text-sm">
        <Menu />
      </div>
    </div>
    <Outlet />
    <TanStackRouterDevtools />
  </>
);

export const Route = createRootRoute({ component: RootLayout });
