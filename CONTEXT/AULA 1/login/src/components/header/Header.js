import { FaEarlybirds } from "react-icons/fa";
import Menu from "./Menu";
import { Link } from "react-router-dom";
import { HeaderDiv } from "./Header.styled"

function Header() {
  return (
    <HeaderDiv>
    <Link to='/'><FaEarlybirds style={{fontSize: '60'}}/></Link>
    <Menu />
    </HeaderDiv>
  )
}
export default Header