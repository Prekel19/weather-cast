import { Github } from "lucide-react";
import "./style.scss";

export const Footer = () => {
  return (
    <div className="footer">
      <p>
        Created by: <a href="https://github.com/Prekel19">Prekel19</a>
      </p>
      <a className="github-icon" href="https://github.com/Prekel19">
        <Github color="#fff" />
      </a>
    </div>
  );
};
