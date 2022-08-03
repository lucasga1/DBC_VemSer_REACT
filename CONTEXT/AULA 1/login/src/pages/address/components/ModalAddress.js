import { Modal } from 'antd';
import 'antd/dist/antd.css';
import TabelaEnderecos from './TabelaEnderecos';
import TabelaContatos from '../../contatos/components/TabelaContatos';
import { DivDescricao } from './ModalAddress.styled';

function ModalAddress({ visible, setVisible, enderecoPessoa, idPessoa, contatosPessoa, getContact }) {

    if (!contatosPessoa) {
        return
    }

    return (
        <Modal
            title="Endereços cadastrados"
            centered
            visible={visible}
            onOk={() => setVisible(false)}
            onCancel={() => setVisible(false)}
            width={1000}
        ><h1>Endereços do usuário</h1>
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
            {enderecoPessoa.map(({ tipo, logradouro, numero, complemento, cep, cidade, estado, pais, idEndereco }) => (
                <TabelaEnderecos
                    tipo={tipo} logradouro={logradouro} numero={numero}
                    complemento={complemento} cep={cep} cidade={cidade}
                    estado={estado} pais={pais} idEndereco={idEndereco}
                    visible={visible} setVisible={setVisible}
                    enderecoPessoa={enderecoPessoa} idPessoa={idPessoa} />
            ))}
            <TabelaContatos contatosPessoa={contatosPessoa} getContact={getContact} idPessoa={idPessoa}/>
        </Modal >
    )
}
export default ModalAddress