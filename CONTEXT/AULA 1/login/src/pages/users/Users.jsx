import { Form, Field, Formik } from "formik";
import { useContext } from "react";
import { FaEarlybirds } from "react-icons/fa";
import { AuthContext } from "../../context/AuthContext";
import { Inputs, Title, Subscribe, Logo, Dashboard, SubscribeDash, Container, Div, BgBody, SpanForgot, Errors } from "./Users.styled";
import { ButtonPrimary } from '../../components/button/ButtonPrimary';
import { Toaster } from 'react-hot-toast';
import * as Yup from "yup";
function Users() {

    const { handleSignUp } = useContext(AuthContext);

    const SignupSchema = Yup.object().shape({
        login: Yup.string()
            .min(2, 'Muito curta')
            .max(50, 'Muito longo')
            .required('Required field'),
        senha: Yup.string()
            .min(2, 'Muito curta')
            .max(50, 'Muito longo')
            .required('Required field')
    })
    return (
        <BgBody>
            <Container>
                <Dashboard>
                    <Logo><a href='/'><FaEarlybirds style={{ fontSize: '40px', color: '#3751FF' }} /></a></Logo>
                    <SubscribeDash>Seja bem vindo!</SubscribeDash>
                </Dashboard>
                <Div>
                    <Title>A VISÃO DO FUTURO - ENTERPRISE</Title>
                    <Subscribe>Acesse com seu usuário e senha</Subscribe>
                </Div>
                <Div>
                    <Formik
                        initialValues={{
                            login: '',
                            senha: '',
                        }}
                        validationSchema={SignupSchema}
                        onSubmit={values => {
                            handleSignUp(values);                            
                        }}

                    >
                        {({ errors, touched }) => (
                            <Form>
                                <Inputs>
                                    <label htmlFor="login">USUÁRIO*</label>
                                    <Field name="login" placeholder="Email address" />
                                    <Errors>
                                        {errors.login && touched.login ? (<p>{errors.login}</p>) : null}
                                    </Errors>
                                    <label htmlFor="password">SENHA*<SpanForgot>Esqueceu sua senha?</SpanForgot></label>
                                    <Field name="senha" type="password" placeholder="Password" />
                                    <Errors>
                                        {errors.senha && touched.senha ? (<p>{errors.senha}</p>) : null}
                                    </Errors>
                                </Inputs>                               
                                    <ButtonPrimary type="submit" width="380" style={{marginBottom: '60px', cursor: 'pointer'}}>Criar conta</ButtonPrimary>
                                    <Toaster />                               
                            </Form>
                        )}
                    </Formik>                    
                </Div>
            </Container>
        </BgBody >
    )
}
export default Users;