import { FaEarlybirds } from "react-icons/fa";
import Menu from "./Menu";
import { Link } from "react-router-dom";
import style from "./Header.module.css";

function Header() {
  return (
    <div className={style.header}>
    <Link to='/'><FaEarlybirds style={{fontSize: '60'}}/></Link>
    <Menu />
    </div>
  )
}
export default Header