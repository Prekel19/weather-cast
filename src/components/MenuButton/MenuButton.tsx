import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import MenuIcon from "../../assets/icons/hamburger-menu.svg";
import "./menubutton.scss";

export const MenuButton = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="menu-button">
        <img src={MenuIcon} alt="Hamburger menu icon" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="menu-button_content" align="end">
        <DropdownMenuItem className="menu-button_content-item">Home</DropdownMenuItem>
        <DropdownMenuItem className="menu-button_content-item">
          Weather Map
        </DropdownMenuItem>
        <DropdownMenuItem className="menu-button_content-item">Settings</DropdownMenuItem>
        <DropdownMenuItem className="menu-button_content-item">About</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
