import { Modal, Col, Row } from 'antd';
import 'antd/dist/antd.css';
import TabelaEnderecos from './TabelaEnderecos';
import TabelaContatos from '../../contatos/components/TabelaContatos';

function ModalAddress({ visible, setVisible, enderecoPessoa, idPessoa, contatosPessoa, getContact }) {

    if (!contatosPessoa) {
        return
    }

    const mudarParaAtualizarContato = (valueIdContato, valueIdPessoa) => {
        console.log(valueIdContato)
        console.log(valueIdPessoa)
       window.location.href = `/atualiza-contato/${valueIdPessoa}/${valueIdContato}`
    }

    return (
        <Modal
            title="Informações do Usuário"
            centered
            visible={visible}
            onOk={() => setVisible(false)}
            onCancel={() => setVisible(false)}
            width={1000}
        >
            <Row>
                <Col span={18} push={6}>
                    <TabelaEnderecos 
                    visible={visible} setVisible={setVisible} 
                    enderecoPessoa={enderecoPessoa} idPessoa={idPessoa} />
                </Col>
                <Col span={6} pull={18}>
                    <TabelaContatos 
                    mudarParaAtualizarContato={mudarParaAtualizarContato}
                    contatosPessoa={contatosPessoa} 
                    getContact={getContact} idPessoa={idPessoa} />
                </Col>
            </Row>
        </Modal >
    )
}
export default ModalAddress