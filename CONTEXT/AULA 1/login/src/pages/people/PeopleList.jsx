import { PeopleContext } from "../../context/PeopleContext"
import { useContext, useEffect, useState } from "react"
import { Pessoa } from './PeopleList.styled';
import fotoPerfil from '../../imagens/fotoPerfil.png';
import { AddressContext } from "../../context/AddressContext";
import ModalAddress from '../address/components/ModalAddress';
import { message, Popconfirm } from 'antd';
import moment from "moment";

function PeopleList() {

  const confirm = (idPessoa) => {
    message.success('Usuário excluído com sucesso');
    handleDelete(idPessoa)
  };

  const cancel = () => {
    message.error('Usuário não excluído');
  };

  const { buscaPessoas, irParaUpdate, handleDelete, getPessoaId } = useContext(PeopleContext);
  const { enderecoPessoa, irParaCadastroEndereco, setIdPessoa, idPessoa, getAddress } = useContext(AddressContext);

  console.log(idPessoa)

  const [visible, setVisible] = useState(false);

  const navegaParaModalAddress = (idPessoa) => {
    setVisible(true)
    setIdPessoa(idPessoa)
    getPessoaId(idPessoa)
    getAddress(idPessoa)
  }

  return (
    <>
      <ModalAddress setVisible={setVisible} visible={visible} enderecoPessoa={enderecoPessoa} idPessoa={idPessoa} />
      {buscaPessoas.map(({ nome, dataNascimento, cpf, email, idPessoa }) => (
        <Pessoa key={idPessoa}>
          <div >
            <span onClick={() => navegaParaModalAddress(idPessoa)}>
              <li><img src={fotoPerfil} alt="Lucas" />{nome}</li>
              <li>{moment(dataNascimento, 'YYYY-MM-DD').format('DD/MM/YYYY')}</li>
              <li>{cpf.replace(/\D/g, '')
                .replace(/(\d{3})(\d)/, '$1.$2')
                .replace(/(\d{3})(\d)/, '$1.$2')
                .replace(/(\d{3})(\d)/, '$1-$2')
                .replace(/(-\d{2})\d+?$/, '$1')}</li>
              <li>{email}</li>
            </span>
            <div>
              <button style={{ cursor: 'pointer' }} onClick={() => irParaUpdate(idPessoa)}>Atualizar</button>
              <Popconfirm title="Tem certeza que deseja excluir?" onConfirm={() => confirm(idPessoa)} onCancel={cancel} okText="Sim" cancelText="Não">
                <button style={{ cursor: 'pointer' }}>Excluir</button>
              </Popconfirm>
              <button style={{ cursor: 'pointer' }} onClick={() => irParaCadastroEndereco(idPessoa)}>Cadastrar Endereço</button>
            </div>
          </div>
        </Pessoa>
      ))
      }
    </>
  )
}

export default PeopleList





