import { apiDbc } from "../../../api"

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
                    <p>{contatosPessoa.idPessoa}</p>
                    <p>{contatosPessoa.tipoContato}</p>
                    <p>{contatosPessoa.telefone}</p>
                    <p>{contatosPessoa.descricao}</p>
                    <p>{contatosPessoa.idContato}</p>
                    <button>Atualizar</button>
                    <button onClick={() => handleDeleteContact(contatosPessoa.idContato)}>Excluir</button>
                </div>
            ))}
        </>
    )
}
export default TabelaContatos