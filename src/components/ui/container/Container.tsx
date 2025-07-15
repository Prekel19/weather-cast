import { PropsWithChildren } from "react";
import "./style.scss";

type Container = PropsWithChildren & {
  className?: string;
};

export const Container = ({ children, className = "" }: Container) => {
  return <div className={`container ${className}`}>{children}</div>;
};
