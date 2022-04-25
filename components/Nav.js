import Link from "next/Link";
import navStyles from "../styles/Nav.module.css";
const Nav = () => {
  return (
    <nav className={navStyles.nav}>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/skill">Skill</Link>
        </li>
        <li>
          <Link href="/project">Project</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};
export default Nav;
