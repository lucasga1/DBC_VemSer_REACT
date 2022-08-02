import { Modal } from 'antd';
import 'antd/dist/antd.css';
import { useContext, useEffect } from 'react';
import { apiDbc } from '../../../api';
import { ButtonSecundary } from '../../../components/button/ButtonPrimary';
import { AddressContext } from '../../../context/AddressContext';
import { DivDescricao, Endereco, DivContent } from './ModalAddress.styled'
import { message, Popconfirm } from 'antd';

function TabelaEnderecos({ 
    tipo, logradouro, numero, complemento, 
    cep, cidade, estado, pais, idEndereco, 
    visible, setVisible, enderecoPessoa, idPessoa }) {   

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
        <div>
            <h1>Informção do Endereço</h1>
            <DivContent key={idEndereco} >
                <DivDescricao>
                    <p>Tipo</p>
                    <p>Logradouro</p>
                    <p>Número</p>
                    <p>Complemento</p>
                    <p>CEP</p>
                    <p>Cidade</p>
                    <p>Estado</p>
                    <p>Pais</p>
                </DivDescricao>
                <Endereco>
                    <li>{tipo}</li>
                    <li>{logradouro}</li>
                    <li>{numero}</li>
                    <li>{complemento}</li>
                    <li>{cep.replace(/\D/g, '')
                        .replace(/(\d{5})(\d)/, '$1-$2')
                        .replace(/(-\d{3})\d+?$/, '$1')}</li>
                    <li>{cidade}</li>
                    <li>{estado}</li>
                    <li>{pais}</li>
                </Endereco>
                <div>
                    <ButtonSecundary style={{ cursor: "pointer" }} onClick={() => mudarParaCadastroAtualizar(idEndereco, idPessoa)}>Atualizar</ButtonSecundary>
                    <Popconfirm
                        title="Tem certeza que deseja excluir?"
                        onConfirm={() => confirm(idEndereco, 'Endereço excluído com sucesso!')}
                        onCancel={() => cancel('Endereço não excluído.')}
                        okText="Sim" cancelText="Não">
                        <ButtonSecundary style={{ cursor: "pointer" }}>Excluir</ButtonSecundary>
                    </Popconfirm>
                </div>
            </DivContent>
        </div>
    )
}
export default TabelaEnderecos