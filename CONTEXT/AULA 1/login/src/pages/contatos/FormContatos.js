import { Formik } from "formik"
import { ButtonSecundary } from "../../components/button/ButtonPrimary"
import { apiDbc } from "../../api"

function FormContatos() {
    
    const handleCreateContact = async (contatoApi, idPessoa) => {
        try {
            const data = await apiDbc.post(`/contato/${idPessoa}`, contatoApi)
            console.log(data.data)
            window.location.href = `/pessoas`
        } catch (error) {
            console.log(error)
        }
    }    
    return (
        <>
            <Formik
                initialValues={{
                    idPessoa: '',
                    tipoContato: '',
                    telefone: '',
                    descricao: ''
                }}
                onSubmit={(values) => {
                    const contatoApi = {
                        idPessoa: 691,
                        tipoContato: values.tipoContato,
                        telefone: values.telefone.replace(/[^0-9]/gi, ''),
                        descricao: values.descricao
                    }
                    handleCreateContact(contatoApi, 691);
                    
                }}
            >
                {values => (
                    <form onSubmit={values.handleSubmit}>
                        <label htmlFor="tipoContato">Selecione o tipo do contato*</label>
                        <select
                            name="tipoContato"
                            id="tipoContato"
                            type="text"
                            onChange={values.handleChange}
                        >
                            <option value={values.tipoContato}></option>
                            <option value={values.tipoContato}>COMERCIAL</option>
                            <option value={values.tipoContato}>RESIDENCIAL</option>
                        </select>

                        <label htmlFor="telefone">Telefone*</label>
                        <input
                            name="telefone"
                            id="telefone"
                            type="text"
                            onChange={values.handleChange}
                            value={values.telefone}
                        />

                        <label htmlFor="descricao">Detalhes sobre seu contato:</label>
                        <input
                            name="descricao"
                            type="text"
                            id="descricao"
                            onChange={values.handleChange}
                            value={values.descricao}
                        />
                        <ButtonSecundary type="submit">Cadastrar</ButtonSecundary>
                    </form>
                )}
            </Formik>
        </>
    )
}
export default FormContatos