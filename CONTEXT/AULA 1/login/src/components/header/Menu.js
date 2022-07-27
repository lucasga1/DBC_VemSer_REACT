import Item from "./Item"
import { useContext } from "react"
import { AuthContext } from "../../context/AuthContext"
import style from './Menu.module.css'

function Menu() {
  const { handleLogout, token  } = useContext(AuthContext)
  
  return (
    <div className={style.menu}>
      <nav>
        <ul >
          { !token
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
      <button onClick={handleLogout} on>Sair</button>
    </div>
  )
}
export default Menu