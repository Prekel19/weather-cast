import { Fragment } from "react/jsx-runtime";
import { Header } from "../ui/header/Header";
import { Outlet } from "react-router";

export const MainLayout = () => {
  return (
    <Fragment>
      <Header />
      <Outlet />
    </Fragment>
  );
};
