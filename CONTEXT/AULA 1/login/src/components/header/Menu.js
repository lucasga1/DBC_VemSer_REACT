import Item from "./Item"
import { useContext } from "react"
import { AuthContext } from "../../context/AuthContext"
import { MenuDiv } from "./Menu.styled"

function Menu() {
  const { handleLogout, auth } = useContext(AuthContext)
  
  return (
    <div>
      <nav>
        <ul >
          { !auth
            ? <>
              <Item value='Login' url='/' />
              <Item value='Usuários' url='/usuarios' />
            </>
            :
            <>
              <Item value='Pessoas' url='/pessoas' />
              <Item value='Endereço' url='/endereco' />
            </>
          }
        </ul>
      </nav>
      {auth && <button onClick={handleLogout}>Sair</button>}
    </div>
  )
}
export default Menu