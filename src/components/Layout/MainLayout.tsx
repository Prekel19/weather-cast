import { Header } from "../Header/Header";
import { SearchBar } from "../SearchBar/SearchBar";
import { Outlet } from "react-router";
import { useBackgroundContext } from "@/context/BackgroundContext";
import { Footer } from "../Footer/Footer";

export const MainLayout = () => {
  const { background } = useBackgroundContext();

  return (
    <div className={`main ${background}`}>
      <Header />
      <SearchBar />
      <Outlet />
      <Footer />
    </div>
  );
};
