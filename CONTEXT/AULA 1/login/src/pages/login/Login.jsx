import { Form, Field, Formik } from "formik";
import { useContext } from "react";
import { FaEarlybirds } from "react-icons/fa";
import { AuthContext } from "../../context/AuthContext";
import { Inputs, Title, Subscribe, Logo, Dashboard, SubscribeDash, Container, Div, Link, SpanSignup, SpanForgot, Errors, BgBody } from "./Login.styled";
import { ButtonPrimary } from "../../components/button/ButtonPrimary";
import * as Yup from 'yup';
function Login() {
    const { handleLogin } = useContext(AuthContext);
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
                    <Logo><FaEarlybirds style={{ fontSize: '40px', color: '#3751FF' }} /></Logo>
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
                                    <label htmlFor="login">EMAIL</label>
                                    <Field name="login" placeholder="Email address" />
                                    <Errors>
                                        {errors.login && touched.login ? (<p>{errors.login}</p>) : null}
                                    </Errors>
                                    <label htmlFor="password">PASSWORD<SpanForgot>Forgot password?</SpanForgot></label>
                                    <Field name="senha" type="password" placeholder="Password" />
                                    <Errors>
                                        {errors.senha && touched.senha ? (<p>{errors.senha}</p>) : null}
                                    </Errors>
                                </Inputs>
                                <ButtonPrimary type="submit" width="380">Login</ButtonPrimary>
                            </Form>
                        )}
                    </Formik>
                    <SpanSignup>Don,t have an acount?<Link href='/usuarios'>Sign up</Link></SpanSignup>
                </Div>
            </Container>
        </BgBody>
    )
}
export default Login