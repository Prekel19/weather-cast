import { createBrowserRouter, RouterProvider } from "react-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { MainLayout } from "./components/Layout/MainLayout";
import { Home } from "./pages/Home";
import { Weather } from "./pages/Weather";
import { Search } from "./pages/Search";
import { BackgroundProvider } from "./context/BackgroundContext";
import { WeatherMap } from "./pages/WeatherMap";
import { About } from "./pages/About";

const queryClient = new QueryClient();

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <BackgroundProvider>
          <MainLayout />
        </BackgroundProvider>
      ),
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/weather/:cityUrl",
          element: <Weather />,
        },
        {
          path: "/search/:city",
          element: <Search />,
        },
        {
          path: "/weathermap",
          element: <WeatherMap />,
        },
        {
          path: "/about",
          element: <About />,
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
