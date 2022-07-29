import { PeopleContext } from "../../context/PeopleContext"
import { useContext } from "react"
import { Pessoa } from './PeopleList.styled';

function PeopleList() {

  const { buscaPessoas, alteraValor, handleDelete } = useContext(PeopleContext)

  return (

    <>
      {buscaPessoas.map(({ nome, dataNascimento, cpf, email, idPessoa }) => (
        <Pessoa key={idPessoa}>
          <li>{nome}</li>
          <li>{dataNascimento}</li>
          <li>{cpf}</li>
          <li>{email}</li>
          <button onClick={() => alteraValor(idPessoa, true)}>Atualizar</button>
          <button type="primary" onClick={() => handleDelete(idPessoa)} >Excluir</button>

        </Pessoa>
      ))}
    </>
  )
}
export default PeopleList





