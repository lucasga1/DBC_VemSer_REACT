import { apiDbc } from "../../../api"
import { ButtonSecundary } from "../../../components/button/ButtonPrimary"

function TabelaContatos({ contatosPessoa, getContact, idPessoa }) {

    const handleDeleteContact = async (idContatoDel) => {
        try {
            await apiDbc.delete(`/contato/${idContatoDel}`)
            getContact(idPessoa)
        } catch (error) {
            console.log(error)
        }
    }
    

    console.log(contatosPessoa)
    return (
        <>
            <h1>Informação do Contato</h1>

            {contatosPessoa.map(contatosPessoa => (

                <div key={contatosPessoa.idContato}>                    
                    <p>Tipo: {contatosPessoa.tipoContato}</p>
                    <p>Número: {contatosPessoa.telefone}</p>
                    <p>Descrição: {contatosPessoa.descricao}</p>
                    <ButtonSecundary>Atualizar</ButtonSecundary>
                    <ButtonSecundary onClick={() => handleDeleteContact(contatosPessoa.idContato)}>Excluir</ButtonSecundary>
                </div>
            ))}
        </>
    )
}
export default TabelaContatos