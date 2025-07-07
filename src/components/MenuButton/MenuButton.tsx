import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import MenuIcon from "../../assets/icons/hamburger-menu.svg";
import "./menubutton.scss";
import { useNavigate } from "react-router";

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
          Home
        </DropdownMenuItem>
        <DropdownMenuItem
          className="menu-button_content-item"
          onClick={() => navigate("/weathermap")}
        >
          Weather Map
        </DropdownMenuItem>
        <DropdownMenuItem
          className="menu-button_content-item"
          onClick={() => navigate("/about")}
        >
          About
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
