import { useStore } from "@nanostores/react";
import { lazy } from "react";

import { router } from "./stores/router";

const NotFoundPage = lazy(() => import("./pages/NotFound"));
const HomePage = lazy(() => import("./pages/Home"));
const CharacterPage = lazy(() => import("./pages/Character"));

export function Router() {
  const page = useStore(router);

  switch (page?.route) {
    case "home":
      return <HomePage />;

    case "character":
      return <CharacterPage />;

    default:
      return <NotFoundPage />;
  }
}
