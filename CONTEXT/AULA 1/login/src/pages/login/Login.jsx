import { useFormik } from "formik";
import { useContext } from "react";
import { FaEarlybirds } from "react-icons/fa";
import { AuthContext } from "../../context/AuthContext";
import { Container, Inputs, Title, Button, Label, Subscribe, Logo, Dashboard, SubscribeDash } from "./Login.styled"

function Login() {
    const { handleLogin } = useContext(AuthContext);

    const formik = useFormik({
        initialValues: {
            login: '',
            senha: ''
        },
        onSubmit: value => {
            handleLogin(value)
        }
    })

    return (
        <Container>
            <Dashboard>
                <Logo><FaEarlybirds style={ {fontSize: '40px'} }/></Logo>
                <SubscribeDash>Dashboard Kit</SubscribeDash>
            </Dashboard>
            <Title>Acesse sua conta</Title>
            <Subscribe>Enter your email and password bellow</Subscribe>
            <form onSubmit={formik.handleSubmit}>
                <Label htmlFor="login">Usuário:</Label>

                <Inputs
                    id="login"
                    name="login"
                    type='text'
                    placeholder="Email address"
                    onChange={formik.handleChange}
                    value={formik.values.login}
                />

                <Label htmlFor="senha">Senha:</Label>
                <Inputs
                    id="senha"
                    name="senha"
                    type='password'
                    placeholder="Password"
                    onChange={formik.handleChange}
                    value={formik.values.senha}
                />

                <Button type="submit">Entrar</Button>
            </form>
        </Container>
    )
}

export default Login