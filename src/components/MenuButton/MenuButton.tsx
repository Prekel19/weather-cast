import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useNavigate } from "react-router";
import { Home, Info, Map } from "lucide-react";
import MenuIcon from "../../assets/icons/hamburger-menu.svg";
import "./style.scss";

export const MenuButton = () => {
  const navigate = useNavigate();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="menu-button">
        <img src={MenuIcon} alt="Hamburger menu icon" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="menu-button_content" align="end">
        <DropdownMenuItem
          className="menu-button_content-item"
          onClick={() => navigate("/")}
        >
          <Home color="#fff" />
          Home
        </DropdownMenuItem>
        <DropdownMenuItem
          className="menu-button_content-item"
          onClick={() => navigate("/weathermap")}
        >
          <Map color="#fff" />
          Weather Map
        </DropdownMenuItem>
        <DropdownMenuItem
          className="menu-button_content-item"
          onClick={() => navigate("/about")}
        >
          <Info color="#fff" />
          About
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
