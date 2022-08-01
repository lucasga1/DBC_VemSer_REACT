import { Modal } from 'antd';
import 'antd/dist/antd.css';
import { useContext } from 'react';
import { apiDbc } from '../../../api';
import { ButtonSecundary } from '../../../components/button/ButtonPrimary';
import { AddressContext } from '../../../context/AddressContext';
import { DivDescricao, Endereco, DivContent } from './ModalAddress.styled'

function ModalAddress({ visible, setVisible, enderecoPessoa, idPessoa }) {

    const { recebeIdAndNavega, getAddress } = useContext(AddressContext)
    

    const handleDeleteAddress = async (idEndereco) => {
        try {
            await apiDbc.delete(`/endereco/${idEndereco}`)
            getAddress(idPessoa)

        } catch (error) {
            console.log(error)
        }
    }

    return (
        <Modal
            title="Endereços cadastrados"
            centered
            visible={visible}
            onOk={() => setVisible(false)}
            onCancel={() => setVisible(false)}
            width={1000}
        >
            {enderecoPessoa.map(({ tipo, logradouro, numero, complemento, cep, cidade, estado, pais, idEndereco }) => (
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
                        <li>{cep}</li>
                        <li>{cidade}</li>
                        <li>{estado}</li>
                        <li>{pais}</li>
                    </Endereco>
                    <div>
                        <ButtonSecundary onClick={() => recebeIdAndNavega(idEndereco, true, idPessoa)}>Atualizar</ButtonSecundary>
                        <ButtonSecundary onClick={() => handleDeleteAddress(idEndereco)}>Excluir</ButtonSecundary>
                    </div>
                </DivContent>
            ))
            }
        </Modal >
    )
}
export default ModalAddress