import { Formik } from "formik";
import { ButtonSecundary } from "../../components/button/ButtonPrimary";
import { apiDbc } from "../../api";
import { useParams } from "react-router-dom";
import { DivContent } from './FormContatos.styled';
import MaskedInput from "react-text-mask";
import { maskTelefone } from '../../consts';

function FormContatos() {
    const { idPessoa, idContato } = useParams()
    const handleCreateContact = async (contatoApi, idPessoa) => {
        try {
            const data = await apiDbc.post(`/contato/${idPessoa}`, contatoApi)
            console.log(data.data)
            window.location.href = `/pessoas`
        } catch (error) {
            console.log(error)
        }
    }
    const handleUpdateContact = async (contatoApi, idContato) => {
        try {
            await apiDbc.put(`/contato/${idContato}`, contatoApi)
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
                        idPessoa: idPessoa,
                        tipoContato: values.tipoContato,
                        telefone: values.telefone.replace(/[^0-9]/gi, ''),
                        descricao: values.descricao
                    }
                    idContato ? handleUpdateContact(contatoApi, idContato) : handleCreateContact(contatoApi, idPessoa);
                }}
            >
                {values => (
                    <DivContent>
                        <div>
                            <h1>{idContato ? 'Atualize seu contato' : 'Cadastre um novo contato'}</h1>
                        </div>
                        <div>
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
                                <MaskedInput
                                    mask={maskTelefone}
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
                                <div>
                                    <ButtonSecundary style={{cursor: 'pointer'}}type="submit">{idContato ? 'Atualizar' : 'Cadastrar'}</ButtonSecundary>
                                </div>
                            </form>
                        </div>
                    </DivContent>
                )}
            </Formik>
        </>
    )
}
export default FormContatos