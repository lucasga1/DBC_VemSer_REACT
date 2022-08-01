import Img from 'react-image';
import { PeopleContext } from "../../context/PeopleContext"
import { useContext, useState } from "react"
import { Pessoa } from './PeopleList.styled';
import fotoPerfil from '../../imagens/fotoPerfil.png';
import { AddressContext } from "../../context/AddressContext";
import ModalAddress from '../address/components/ModalAddress';
import { ButtonSecundary } from '../../components/button/ButtonPrimary';

function PeopleList() {

  const { buscaPessoas, irParaUpdate, handleDelete } = useContext(PeopleContext);
  const { getAddress, enderecoPessoa, recebeIdAndNavega, setIsUpdate } = useContext(AddressContext);

  const [idPessoa, setIdPessoa] = useState();

  const irParaCadastroEndereco = (idPessoa) => {  
    window.location.href = `/endereco/${idPessoa}`
  }

  const [visible, setVisible] = useState(false);

  const modalGetAddress = (idPessoa, verdade) => {
    setVisible(verdade)
    getAddress(idPessoa)
    setIdPessoa(idPessoa)
    setIsUpdate(true)
  }

  return (
    <>
      <ModalAddress recebeIdAndNavega={recebeIdAndNavega} setVisible={setVisible} visible={visible} enderecoPessoa={enderecoPessoa} idPessoa={idPessoa}/>
      {
        buscaPessoas.map(({ nome, dataNascimento, cpf, email, idPessoa }) => (
          <Pessoa key={idPessoa}>

            <div onClick={() => modalGetAddress(idPessoa, true, nome)}>
              <li><img src={fotoPerfil} alt="Lucas" />{nome}</li>
              <li>{dataNascimento}</li>
              <li>{cpf}</li>
              <li>{email}</li>
              <button style={{cursor: 'pointer'}} onClick={() => irParaUpdate(idPessoa)}>Atualizar</button>
              <button style={{cursor: 'pointer'}} onClick={() => handleDelete(idPessoa)} >Excluir</button>
              <button style={{cursor: 'pointer'}} onClick={() => irParaCadastroEndereco(idPessoa)} >Cadastrar Endereço</button>
            </div>

          </Pessoa>
        ))
      }
    </>
  )
}
export default PeopleList





