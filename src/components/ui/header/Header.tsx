import { Logo } from "../logo/Logo";
import styles from "./header.module.scss";

export const header = () => {
  return (
    <header className={styles.header}>
      <Logo />
    </header>
  );
};
