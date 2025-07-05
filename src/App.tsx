import { createBrowserRouter, RouterProvider } from "react-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { MainLayout } from "./components/Layout/MainLayout";
import { Home } from "./pages/Home";
import { CityWeather } from "./pages/CityWeather";
import { SearchResults } from "./pages/SearchResults";

const queryClient = new QueryClient();

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
        {
          path: "/weather/:cityUrl",
          element: <CityWeather />,
        },
        {
          path: "/search/:city",
          element: <SearchResults />,
        },
      ],
    },
  ]);

  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}
