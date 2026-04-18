import { RouterProvider } from "react-router";
import { router } from "./routes";

export default function App() {
  const appRouter = router;
  return <RouterProvider router={appRouter} />;
}
