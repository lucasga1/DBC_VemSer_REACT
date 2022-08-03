import { apiDbc } from "../../../api"
import { ButtonSecundary } from "../../../components/button/ButtonPrimary";
import { DivContent } from './TabelaContatos.styled';
import { message, Popconfirm } from 'antd';

function TabelaContatos({ mudarParaAtualizarContato, contatosPessoa, getContact, idPessoa }) {

    const handleDeleteContact = async (idContatoDel) => {
        try {
            await apiDbc.delete(`/contato/${idContatoDel}`)
            getContact(idPessoa)
        } catch (error) {
            console.log(error)
        }
    }

    // toastr ////////////////////////////////////////////
    const confirm = (idContato, value) => {
        message.success(value);
        handleDeleteContact(idContato)
    };
    const cancel = (value) => {
        message.error(value);
    };
    /////////////////////////////////////////////////////

    return (
        <DivContent>
            <h1>Informação do Contato</h1>
            {contatosPessoa.map(({ tipoContato, telefone, descricao, idContato, idPessoa }) => (
                <div key={idContato}>
                    <div>
                        <p>Tipo: <span>{tipoContato}</span></p>
                        <p>Número: <span>
                            {telefone.replace(/\D/g, '')
                                .replace(/(\d{2})(\d)/, '($1) $2')
                                .replace(/(\d{5})(\d)/, '$1$2')
                                .replace(/(\d{4})(\d)/, '$1$2-')}
                        </span></p>
                        <p>Descrição: <span>{descricao}</span></p>
                        <div>
                            <ButtonSecundary onClick={() => mudarParaAtualizarContato(idContato, idPessoa)}>Atualizar</ButtonSecundary>
                            <Popconfirm
                                title="Tem certeza que deseja excluir?"
                                onConfirm={() => confirm(idContato, 'Endereço excluído com sucesso!')}
                                onCancel={() => cancel('Endereço não excluído.')}
                                okText="Sim" cancelText="Não">
                                <ButtonSecundary>Excluir</ButtonSecundary>
                            </Popconfirm>

                        </div>
                    </div>
                </div>
            ))}
        </DivContent>
    )
}
export default TabelaContatos