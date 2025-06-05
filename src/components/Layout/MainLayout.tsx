import { Fragment } from "react/jsx-runtime";
import { Header } from "../Header/Header";
import { SearchBar } from "../SearchBar/SearchBar";
import { Outlet } from "react-router";

export const MainLayout = () => {
  return (
    <Fragment>
      <Header />
      <SearchBar />
      <Outlet />
    </Fragment>
  );
};
