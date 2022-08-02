import { FaEarlybirds } from "react-icons/fa";
import Menu from "./Menu";
import { Link } from "react-router-dom";
import { DivLogo, HeaderDiv, Logo } from "./Header.styled"

function Header() {
  return (
    <HeaderDiv>
      <DivLogo>
        <Logo><Link to='/'><FaEarlybirds style={{ fontSize: '35', color: '#3751FF' }} /></Link></Logo>
        <h1>Dashboard Kit</h1>
      </DivLogo>
      <div>
        <Menu />
      </div>
    </HeaderDiv>
  )
}
export default Header