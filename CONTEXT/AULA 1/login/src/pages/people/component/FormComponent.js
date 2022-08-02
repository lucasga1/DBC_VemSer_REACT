import MaskedInput from 'react-text-mask';
import moment from 'moment';
import { Formik } from 'formik';
import { useContext, useEffect } from 'react';
import { PeopleContext } from '../../../context/PeopleContext';
import { maskCpf, maskDate } from '../../../consts';
import { ContainerForm, DivForm } from '../component/PeopleForm.styled';
import { ButtonSecundary } from '../../../components/button/ButtonPrimary'
import { Toaster } from 'react-hot-toast';

function FormComponent({ isUpdate, id }) {
    const { handleCreateUser, handleUpdate, user } = useContext(PeopleContext)
    console.log(user)
    
    if(!user && isUpdate){
        return
    }
    return (

        <Formik
            initialValues={{
                nome: user.nome ? user.nome : '',
                dataNascimento: user.dataNascimento ? user.dataNascimento : '',
                cpf: user.cpf ? user.cpf : '',
                email: user.email ? user.email : ''
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
                    <div>
                        <h1>{isUpdate ? 'Atualize seus dados' : 'Insira seus dados'}</h1>
                    </div>
                    <form onSubmit={props.handleSubmit}>
                        <DivForm>
                            <label htmlFor='nome'>Nome completo</label>
                            <input
                                name="nome"
                                type="text"
                                placeholder='Digite seu nome'
                                value={props.values.nome}
                                onChange={props.handleChange}
                                onBlur={props.handleBlur}
                            />
                            <label htmlFor='dataNascimento'>Data de nascimento</label>
                            <MaskedInput
                                mask={maskDate}
                                name="dataNascimento"
                                type="text"
                                placeholder='Digite sua data de nascimento'
                                value={props.values.dataNascimento}
                                onChange={props.handleChange}
                                onBlur={props.handleBlur}
                            />
                            <label htmlFor='cpf'>CPF</label>
                            <MaskedInput
                                mask={maskCpf}
                                name="cpf"
                                type="text"
                                placeholder='Digite seu CPF'
                                value={props.values.cpf}
                                onChange={props.handleChange}
                                onBlur={props.handleBlur}
                            />
                            <label htmlFor='nome'>E-mail</label>
                            <input
                                name="email"
                                type="email"
                                placeholder='Digite seu e-mail'
                                value={props.values.email}
                                onChange={props.handleChange}
                                onBlur={props.handleBlur}
                            />
                            {props.errors.name && <div id="feedback">{props.errors.name}</div>}
                            <div>
                                <ButtonSecundary style={{cursor: 'pointer'}} type="submit">{isUpdate ? 'Atualizar' : 'Cadastrar'}</ButtonSecundary>
                                <Toaster />
                            </div>
                        </DivForm>
                    </form>
                </ContainerForm>
            )}
        </Formik>
    )
}
export default FormComponent