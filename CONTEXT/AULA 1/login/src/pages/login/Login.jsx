import { Form, Field, Formik } from "formik";
import { useContext } from "react";
import { FaEarlybirds } from "react-icons/fa";
import { AuthContext } from "../../context/AuthContext";
import { Inputs, Title, Subscribe, Logo, Dashboard, SubscribeDash, Container, Div, Link, SpanSignup, SpanForgot, Errors, BgBody } from "./Login.styled";
import { ButtonPrimary } from "../../components/button/ButtonPrimary";
import { Toaster } from 'react-hot-toast';
import * as Yup from 'yup';

function Login() {
  

    const { handleLogin } = useContext(AuthContext);
    
    const SignupSchema = Yup.object().shape({
        login: Yup.string()
            .min(2, 'Muito curta')
            .max(50, 'Muito longo')
            .required('Preenchimento Obrigatório'),
        senha: Yup.string()
            .min(2, 'Muito curta')
            .max(50, 'Muito longo')
            .required('Preenchimento Obrigatório')
    })
    return (
        <BgBody>
            <Container>
                <Dashboard>
                    <Logo><FaEarlybirds style={{ fontSize: '40px', color: '#3751FF' }} /></Logo>
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
                            handleLogin(values);
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
                                <ButtonPrimary type="submit" width="380" style={{cursor: 'pointer'}}>Login</ButtonPrimary>
                                <Toaster />
                            </Form>
                        )}
                    </Formik>
                    <SpanSignup>Não possui cadastro?<Link href='/usuarios' style={{cursor: 'pointer'}}>Cadastre-se aqui</Link></SpanSignup>
                </Div>
            </Container>
        </BgBody>
    )
}
export default Login