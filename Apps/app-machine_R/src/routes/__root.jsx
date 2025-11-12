import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import NotFound from "@/pages/NotFound";

const RootLayout = () => (
  <>
    <div className="p-2 flex gap-2">
      <Link to="/" className="[&.active]:font-bold">
        Home
      </Link>{" "}
      <Link to="/about" className="[&.active]:font-bold">
        About
      </Link>
      <Link to="/category" className="[&.active]:font-bold">
        Category
      </Link>
      <Link to="/pokemon/pikachu" className="[&.active]:font-bold">
        Pokemon supprise
      </Link>
      <Link
        to="/shop"
        search={{
          page: 2,
          sortBy: "name",
          desc: true,
          categories: ["electronics", "gifts"],
        }}
      >
        Voir les produits triés
      </Link>
      <Link
        to="/shop"
        search={{
          page: "deux", // ❌ string invalide
          sortBy: "name",
          desc: true,
          categories: ["electronics"],
        }}
      >
        Produits
      </Link>
    </div>
    <hr />
    <Outlet />
    <TanStackRouterDevtools />
  </>
);

export const Route = createRootRoute({ 
    component: RootLayout,
    notFoundComponent: NotFound
});
