import { Formik, Form, Field } from 'formik';
import { useContext, useState } from 'react';
import { PeopleContext } from '../../context/PeopleContext';
import InputMask from 'react-input-mask';


import * as Yup from "yup";


function PeopleForm() {

    const [dataNascimentoMask, setdataNascimentoMask] = useState('');
    const handleInputNascimento = ({ target: { value } }) => setdataNascimentoMask(value);
    /* const dataNascSemBarra = dataNascimentoMask.split('/')
    const dataNascTratada = dataNascSemBarra[2] + dataNascSemBarra[1] + dataNascSemBarra[0];
    const dataNascCerto = dataNascTratada.toString()
    console.log(dataNascCerto) */


    const [cpfMask, setCpfMask] = useState('');
    const handleInputCpf = ({ target: { value } }) => setCpfMask(value);
    /* const cpfSemPonto = cpfMask.split('.')
    const cpfSemTraco = cpfSemPonto[2].split('-')
    const cpfTratado = cpfSemPonto[0] + cpfSemPonto[1] + cpfSemTraco[0] + cpfSemTraco[1]; */

    const { isUpdate, handleCreateUser, handleUpdate, DataNascimento, Cpf } = useContext(PeopleContext)

    const [valoresRecebidos, setValoresRecebidos] = useState([])
   
    return (
        <div>
            <Formik
                initialValues={{
                    nome: '',
                    dataNascimento: '',
                    cpf: '',
                    email: '',
                    id: ''
                }}

                onSubmit={(value) => {
                                     
                    if (isUpdate === false) {
                        handleCreateUser(value)
                    } else {
                        handleUpdate(value)
                    }
                }}
            >
                {({ errors, touched }) => (
                    <Form>
                        <Field name='nome' type='text' placeholder='Digite seu nome' />
                        {errors.nome && touched.nome ? (<div>{errors.nome}</div>) : null}
                        <br />
                        <DataNascimento value={dataNascimentoMask} onChange={handleInputNascimento} />
                        {errors.dataNascimento && touched.dataNascimento ? (<div>{errors.dataNascimento}</div>) : null}
                        <br />
                        <Cpf value={cpfMask} onChange={handleInputCpf} />
                        {errors.cpf && touched.cpf ? (<div>{errors.cpf}</div>) : null}
                        <br />
                        <Field name='email' placeholder='Digite seu e-mail' />
                        {errors.email && touched.email ? (<div>{errors.email}</div>) : null}
                        <button type='submit'>{isUpdate ? 'Atualizar' : 'Cadastrar'}</button>
                    </Form>
                )}
            </Formik>
        </div>

    )
}
export default PeopleForm