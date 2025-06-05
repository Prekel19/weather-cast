import { MenuButton } from "../MenuButton/MenuButton";
import { Logo } from "../ui/logo/Logo";
import "./header.scss";

export const Header = () => {
  return (
    <header className="header">
      <Logo />
      <MenuButton />
    </header>
  );
};
