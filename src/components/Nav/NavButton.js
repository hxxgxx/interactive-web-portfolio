import { forwardRef } from "react";
import styles from "../../css/NavButton.module.css";

const NavButton = forwardRef(({ href, text, onClick }, ref) => (
  <a ref={ref} href={href} onClick={onClick} className={styles.NavButton}>
    {text}
  </a>
));

export default NavButton;
