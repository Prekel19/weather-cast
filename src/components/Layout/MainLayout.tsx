import { Header } from "../Header/Header";
import { SearchBar } from "../SearchBar/SearchBar";
import { Outlet } from "react-router";
import { useBackgroundContext } from "@/context/BackgroundContext";

export const MainLayout = () => {
  const { background } = useBackgroundContext();

  return (
    <div className={`main ${background}`}>
      <Header />
      <SearchBar />
      <Outlet />
    </div>
  );
};
