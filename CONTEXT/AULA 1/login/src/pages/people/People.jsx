import { useEffect, useState } from 'react';
import { apiDbc } from '../../api';
import { Formik, Form, Field } from 'formik';


function People() {
  const [buscaPessoas, setBuscaPessoas] = useState([])

  const [isUpdate, setIsUpdate] = useState(false)
  const [id, setId] = useState([])

  async function setup() {
    try {
      const { data } = await apiDbc.get('/pessoa?pagina=0&tamanhoDasPaginas=20')
      setBuscaPessoas(data.content)

    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    setup();
  }, [])

  const handleCreateUser = async (value) => {
    try {
      const data = await apiDbc.post('/pessoa', value);
      console.log(data.content)
      setup()
    } catch (error) {
      console.log(error);
    }
  }

  const handleDelete = async (value) => {
    try {
      const data = await apiDbc.delete(`/pessoa/${value}`)
      console.log(data.content)
      setup()
    } catch (error) {
      console.log(error)
    }
  }

  const handleUpdate = async (value) => {
    try {
      const data = await apiDbc.put(`/pessoa/${id}`, value)
      console.log(data.content)
      setup()
    } catch (error) {
      console.log(error)
    }
  }

  const alteraValor = (value, verdadeiro) => {
    setId(value)
    setIsUpdate(verdadeiro)
  }


  return (
    <div>
      <h1>Pessoas</h1>
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
            <Field name='dataNascimento' placeholder='Digite sua data de nascimento' />
            {errors.dataNascimento && touched.dataNascimento ? (<div>{errors.dataNascimento}</div>) : null}
            <br />
            <Field name='cpf' placeholder='Digite seu CPF' />
            {errors.cpf && touched.cpf ? (<div>{errors.cpf}</div>) : null}
            <br />
            <Field name='email' placeholder='Digite seu e-mail' />
            {errors.email && touched.email ? (<div>{errors.email}</div>) : null}

            <button type='submit'>{isUpdate ? 'Atualizar' : 'Cadastrar'}</button>
          </Form>
        )}

      </Formik>

      <div>
        {buscaPessoas.map(({ nome, dataNascimento, cpf, email, idPessoa }) => (
          <div key={idPessoa}>
            <br />
            <hr />
            <p>Nome: {nome}</p>
            <p>Data de nascimento: {dataNascimento}</p>
            <p>CPF: {cpf}</p>
            <p>Email: {email}</p>
            <button onClick={setup}>AtualizaLista</button>
            <button onClick={() => alteraValor(idPessoa, true)}>Atualizar</button>
            <button onClick={() => handleDelete(idPessoa)}>Excluir</button>
          </div>
        ))}
      </div>
    </div>
  )

}
export default People

