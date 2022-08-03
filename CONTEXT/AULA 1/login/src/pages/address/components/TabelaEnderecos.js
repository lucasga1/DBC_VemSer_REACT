import 'antd/dist/antd.css';
import { useContext } from 'react';
import { ButtonSecundary } from '../../../components/button/ButtonPrimary';
import { AddressContext } from '../../../context/AddressContext';
import { message, Popconfirm } from 'antd';
import { DivContent } from './TabelEnderecos.styled'

function TabelaEnderecos({ visible, setVisible, enderecoPessoa, idPessoa }) {

    const { handleDeleteAddress, mudarParaCadastroAtualizar } = useContext(AddressContext)
    // toastr ////////////////////////////////////////////
    const confirm = (idEndereco, value) => {
        message.success(value);
        handleDeleteAddress(idEndereco)
    };
    const cancel = (value) => {
        message.error(value);
    };
    /////////////////////////////////////////////////////

    return (
        <DivContent>
            <h1>Endereços do usuário</h1>
            {enderecoPessoa.map(({ tipo, logradouro, numero, complemento, cep, cidade, estado, pais, idEndereco }) => (
                <div key={idEndereco} >
                    <div>
                        <div>
                            <li>Tipo: <span>{tipo}</span></li>
                            <li>Logradouro: <span>{logradouro}</span></li>
                            <li>Número: <span>{numero}</span></li>
                            <li>Complemento: <span>{complemento}</span></li>
                        </div>
                        <div>
                            <li>CEP: <span>{cep.replace(/\D/g, '')
                                .replace(/(\d{5})(\d)/, '$1-$2')
                                .replace(/(-\d{3})\d+?$/, '$1')}</span></li>
                            <li>Cidade: <span>{cidade}</span></li>
                            <li>Estado: <span>{estado}</span></li>
                            <li>Pais: <span>{pais}</span></li>
                        </div>
                    </div>
                    <div>
                        <ButtonSecundary style={{ cursor: "pointer", marginTop: '8px' }} onClick={() => mudarParaCadastroAtualizar(idEndereco, idPessoa)}>Atualizar</ButtonSecundary>
                        <Popconfirm
                            title="Tem certeza que deseja excluir?"
                            onConfirm={() => confirm(idEndereco, 'Endereço excluído com sucesso!')}
                            onCancel={() => cancel('Endereço não excluído.')}
                            okText="Sim" cancelText="Não">
                            <ButtonSecundary style={{ cursor: "pointer", marginTop: '8px' }}>Excluir</ButtonSecundary>
                        </Popconfirm>
                    </div>
                </div>
            ))}
        </DivContent>
    )
}
export default TabelaEnderecos

