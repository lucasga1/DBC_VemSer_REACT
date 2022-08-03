import { PeopleContext } from "../../context/PeopleContext"
import { useContext, useState } from "react"
import { Pessoa } from './PeopleList.styled';
import fotoPerfil from '../../imagens/fotoPerfil.png';
import { AddressContext } from "../../context/AddressContext";
import ModalDetailsUser from '../address/components/ModalDetailsUser';
import { message, Popconfirm } from 'antd';
import moment from "moment";
import { apiDbc } from "../../api";

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
  const [visible, setVisible] = useState(false);
  const [contatosPessoa, setContatosPessoa] = useState();

  const getContact = async (idPessoa) => {
    try {
      const { data } = await apiDbc.get(`/contato/${idPessoa}`)
      setContatosPessoa(data)
    } catch (error) {
      console.log(error)
    }
  }

  const irParaCadastroContato = (idPessoa) => {
    window.location.href = `/contatos/${idPessoa}`
  }

  const navegaParaModalAddress = (idPessoa) => {
    setVisible(true)
    setIdPessoa(idPessoa)
    getPessoaId(idPessoa)
    getAddress(idPessoa)
    getContact(idPessoa)
  }


  return (
    <>
      <ModalDetailsUser setVisible={setVisible} visible={visible} enderecoPessoa={enderecoPessoa} idPessoa={idPessoa} contatosPessoa={contatosPessoa} getContact={getContact} />
      {buscaPessoas.map(({ nome, dataNascimento, cpf, email, idPessoa }) => (
        <Pessoa key={idPessoa}>
          <div >
            <div style={{ cursor: 'pointer' }} onClick={() => navegaParaModalAddress(idPessoa)}>
              <li><img src={fotoPerfil} alt="Lucas" />{nome}</li>
              <li>{moment(dataNascimento, 'YYYY-MM-DD').format('DD/MM/YYYY')}</li>
              <li>{cpf.replace(/\D/g, '')
                .replace(/(\d{3})(\d)/, '$1.$2')
                .replace(/(\d{3})(\d)/, '$1.$2')
                .replace(/(\d{3})(\d)/, '$1-$2')
                .replace(/(-\d{2})\d+?$/, '$1')}</li>
              <li>{email}</li>
            </div>
            <div>
              <button style={{ cursor: 'pointer' }} onClick={() => irParaCadastroContato(idPessoa)}>Cadastrar Contato</button>
              <button style={{ cursor: 'pointer' }} onClick={() => irParaUpdate(idPessoa)}>Atualizar usuário</button>
              <Popconfirm title="Tem certeza que deseja excluir?" onConfirm={() => confirm(idPessoa)} onCancel={cancel} okText="Sim" cancelText="Não">
                <button style={{ cursor: 'pointer' }}>Excluir usuário</button>
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





