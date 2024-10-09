import { createRouter, RouterProvider } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";

const router = createRouter({ routeTree });

declare module "@tanstack/react-router";

const App = () => {
  return (
    <article className="grid min-h-dvh w-full grid-rows-[1fr_auto] bg-light">
      <RouterProvider router={router} />
    </article>
  );
};

export default App;
