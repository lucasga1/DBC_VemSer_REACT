import Item from "./Item"
import { useContext } from "react"
import { AuthContext } from "../../context/AuthContext"
import { ButtonPrimary } from "../button/ButtonPrimary"

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
              <Item value='Cadastro Pessoas' url='/cadastra-pessoa' />
              <Item value='Endereço' url='/endereco' />
            </>
          }
        </ul>
      </nav>
      {auth && <ButtonPrimary width="380" onClick={handleLogout} >Sair</ButtonPrimary> }
    </div>
  )
}
export default Menu