import Item from "./Item"
import { useContext } from "react"
import { AuthContext } from "../../context/AuthContext"
import { MenuDiv } from './Menu.styled'

function Menu() {
  const { handleLogout, auth } = useContext(AuthContext)

  return (
    <MenuDiv>
      <div>
        <nav>
          <ul >
            <Item value='Pessoas' url='/pessoas' />
          </ul>
        </nav>
      </div>
      <div>
        {auth && <button onClick={handleLogout} >Sair</button>}
      </div>
    </MenuDiv >
  )
}
export default Menu