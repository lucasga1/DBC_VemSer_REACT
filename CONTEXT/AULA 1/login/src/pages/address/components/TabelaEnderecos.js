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
            <DivContent key={idEndereco} >                
                <Endereco>
                    <div>
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
                </Endereco>
            </DivContent>
        </div>
    )
}
export default TabelaEnderecos