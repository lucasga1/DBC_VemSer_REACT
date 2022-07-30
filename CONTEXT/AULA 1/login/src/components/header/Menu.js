import Item from "./Item"
import { useContext } from "react"
import { AuthContext } from "../../context/AuthContext"
import { MenuDiv } from './Menu.styled'

function Menu() {
  const { handleLogout, auth } = useContext(AuthContext)

  return (
    <MenuDiv>
      <nav>
        <ul >
          <Item value='Pessoas' url='/pessoas' />
          <Item value='Cadastro Pessoas' url='/cadastra-pessoa' />
          <Item value='Endereço' url='/endereco' />
        </ul>
      </nav>
      {auth && <button width="380" onClick={handleLogout} >Sair</button>}
    </MenuDiv>
  )
}
export default Menu