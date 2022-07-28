import { FaEarlybirds } from "react-icons/fa";
import Menu from "./Menu";
import { Link } from "react-router-dom";
import { HeaderDiv, Logo } from "./Header.styled"

function Header() {
  return (
    <HeaderDiv>
      <Logo>
        <Link to='/'><FaEarlybirds style={{ fontSize: '60' }} /></Link>
      </Logo>
      <Menu />
    </HeaderDiv>
  )
}
export default Header