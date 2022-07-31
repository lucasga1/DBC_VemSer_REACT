import { PeopleContext } from "../../context/PeopleContext"
import { useContext } from "react"
import { Pessoa } from './PeopleList.styled';
import Img from 'react-image'
import fotoPerfil from '../../imagens/fotoPerfil.png'
import { AddressContext } from "../../context/AddressContext";


function PeopleList() {

  const { buscaPessoas, irParaUpdate, handleDelete } = useContext(PeopleContext)
  const { irParaEndereco } = useContext(AddressContext)

  return (

    <>
      {buscaPessoas.map(({ nome, dataNascimento, cpf, email, idPessoa }) => (
        <Pessoa key={idPessoa}>
          <div>          
          <li><img src={fotoPerfil} alt="Lucas" />{nome}</li>
          <li>{dataNascimento}</li>
          <li>{cpf}</li>
          <li>{email}</li>
          <button onClick={() => irParaUpdate(idPessoa)}>Atualizar</button>
          <button onClick={() => handleDelete(idPessoa)} >Excluir</button>
          <button onClick={() => irParaEndereco(idPessoa)} >Cadastrar Endereço</button>
          </div>
        </Pessoa>
      ))}
    </>
  )
}
export default PeopleList





