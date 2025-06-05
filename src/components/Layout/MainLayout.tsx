import { Fragment } from "react/jsx-runtime";
import { Header } from "../Header/Header";
import { Outlet } from "react-router";

export const MainLayout = () => {
  return (
    <Fragment>
      <Header />
      <Outlet />
    </Fragment>
  );
};
