import { createBrowserRouter, RouterProvider } from "react-router";
import { MainLayout } from "./components/Layout/MainLayout";
import { Home } from "./pages/Home";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}
