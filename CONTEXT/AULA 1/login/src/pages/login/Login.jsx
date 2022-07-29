import { Form, Field, Formik } from "formik";
import { useContext } from "react";
import { FaEarlybirds } from "react-icons/fa";
import { AuthContext } from "../../context/AuthContext";
import { Inputs, Title, Label, Subscribe, Logo, Dashboard, SubscribeDash, Container, Div, P, SpanSignup, SpanForgot } from "./Login.styled";
import { ButtonPrimary } from "../../components/button/ButtonPrimary";
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

        <Container>
            <Dashboard>
                <Logo><FaEarlybirds style={{ fontSize: '40px' }} /></Logo>
                <SubscribeDash>Dashboard Kit</SubscribeDash>
            </Dashboard>
            <Div>
                <Title>Log In to Dashboard Kit</Title>
                <Subscribe>Enter your email and password bellow</Subscribe>
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
                                <Label htmlFor="login">EMAIL</Label>
                                <Field name="login" placeholder="Digite seu usuário" />
                                {errors.login && touched.login ? (<div>{errors.login}</div>) : null}
                                <Label htmlFor="password">PASSWORD<SpanForgot>Forgot password?</SpanForgot></Label>
                                <Field name="senha" type="password" placeholder="Digite sua senha" />
                                {errors.login && touched.login ? (<div>{errors.login}</div>) : null}
                            <ButtonPrimary type="submit" width="380">Login</ButtonPrimary>
                            </Inputs>
                        </Form>
                    )}
                </Formik>
                <P>Don,t have an acount?<SpanSignup>Sign up</SpanSignup></P>
            </Div>
        </Container>

    )
}

export default Login