import { Formik } from 'formik';
import { useContext } from 'react';
import { PeopleContext } from '../../../context/PeopleContext';
import { ContainerForm } from '../PeopleForm.styled';
import { maskCpf, maskDate } from '../../../consts';
import MaskedInput from 'react-text-mask';
import moment from 'moment';

function FormComponent({ isUpdate, user, id }) {
    const { handleCreateUser, handleUpdate } = useContext(PeopleContext)
    
    if (!user && isUpdate) {
        return
    }

    return (
        
            <Formik
                initialValues={{
                    nome: user ? user.nome : '',
                    dataNascimento: user ? moment(user.dataNascimento, 'YYYY-MM-DD').format('DD/MM/YYYY') : '',
                    cpf: user ? user.cpf : '',
                    email: user ? user.email : ''
                }}
                onSubmit={(values) => {
                    const newValor = {
                        nome: values.nome,
                        dataNascimento: moment(values.dataNascimento, 'DD/MM/YYYY').format('YYYY-MM-DD'),
                        cpf: values.cpf.replace(/[^0-9]/gi, ''),
                        email: values.email
                    }
                    !isUpdate ? handleCreateUser(newValor) : handleUpdate(newValor, id)
                }}
            >
                {props => (
                    <ContainerForm>
                        <form onSubmit={props.handleSubmit}>
                            <input
                                name="nome"
                                type="text"
                                placeholder='nome'
                                value={props.values.nome}
                                onChange={props.handleChange}
                                onBlur={props.handleBlur}
                            />
                            <MaskedInput
                                mask={maskDate}
                                name="dataNascimento"
                                type="text"
                                placeholder='Data de Nascimento'
                                value={props.values.dataNascimento}
                                onChange={props.handleChange}
                                onBlur={props.handleBlur}
                            />
                            <MaskedInput
                                mask={maskCpf}
                                name="cpf"
                                type="text"
                                placeholder='CPF'
                                value={props.values.cpf}
                                onChange={props.handleChange}
                                onBlur={props.handleBlur}
                            />
                            <input
                                name="email"
                                type="email"
                                placeholder='e-mail'
                                value={props.values.email}
                                onChange={props.handleChange}
                                onBlur={props.handleBlur}
                            />
                            {props.errors.name && <div id="feedback">{props.errors.name}</div>}
                            <button type="submit">{isUpdate ? 'Atualizar' : 'Cadastrar'}</button>
                        </form>
                    </ContainerForm>
                )}
            </Formik>        
    )
}
export default FormComponent