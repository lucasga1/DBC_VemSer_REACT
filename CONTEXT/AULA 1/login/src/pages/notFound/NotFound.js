import { useContext } from 'react'
import { ButtonPrimary } from '../../components/button/ButtonPrimary'
import { AuthContext } from '../../context/AuthContext'
import { Body, Div } from './NotFound.styled'
import notfound from '../../imagens/notfound.png'

function NotFound() {
  const { auth } = useContext(AuthContext)

  const voltarTela = () => {
    if (auth) {
      window.location.href = `/pessoas`
    } else {
      window.location.href = `/`
    }
  }

  return (
    <Body>
      <Div>
        <img src={notfound} alt="" />
        <ButtonPrimary onClick={voltarTela} style={{ cursor: 'pointer' }}>
          {auth ? "Voltar para página principal" : "Voltar para login"}
        </ButtonPrimary>
      </Div>
    </Body>
  )
}
export default NotFound