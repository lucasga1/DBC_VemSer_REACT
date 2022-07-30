import { PeopleContext } from "../../context/PeopleContext"
import { useContext } from "react"
import { Pessoa } from './PeopleList.styled';

function PeopleList() {

  const { buscaPessoas, irParaUpdate, handleDelete } = useContext(PeopleContext)

  return (

    <>
      {buscaPessoas.map(({ nome, dataNascimento, cpf, email, idPessoa }) => (
        <Pessoa key={idPessoa}>
          <li>{nome}</li>
          <li>{dataNascimento}</li>
          <li>{cpf}</li>
          <li>{email}</li>
          <button onClick={() => irParaUpdate(idPessoa)}>Atualizar</button>
          <button onClick={() => handleDelete(idPessoa)} >Excluir</button>

        </Pessoa>
      ))}
    </>
  )
}
export default PeopleList





