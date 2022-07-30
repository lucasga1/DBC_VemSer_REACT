import { Form, Field, Formik } from "formik";
import { useContext } from "react";
import { FaEarlybirds } from "react-icons/fa";
import { AuthContext } from "../../context/AuthContext";
import { Inputs, Title, Subscribe, Logo, Dashboard, SubscribeDash, Container, Div, BgBody, Link, SpanSignup, SpanForgot, Errors } from "./Users.styled";
import { ButtonPrimary } from '../../components/button/ButtonPrimary'

import { Button, Modal, Space } from 'antd';
import React from 'react';
import * as Yup from "yup"


function Users() {

    const { handleSignUp } = useContext(AuthContext);

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

    const info = () => {
        Modal.info({
          title: 'This is a notification message',
          content: (
            <div>
              <p>some messages...some messages...</p>
              <p>some messages...some messages...</p>
            </div>
          ),
      
          onOk() {},
        });
      };

    return (
        <BgBody>
            <Container>
                <Dashboard>
                    <Logo><a href='/'><FaEarlybirds style={{ fontSize: '40px', color: '#3751FF' }} /></a></Logo>
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
                            handleSignUp(values);                            
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
                               
                                    <ButtonPrimary type="submit" width="380">Create Account</ButtonPrimary>
                               
                            </Form>
                        )}
                    </Formik>
                    <SpanSignup>Don,t have an acount?<Link href='/usuarios'>Sign up</Link></SpanSignup>
                </Div>
            </Container>
        </BgBody >
    )

}
export default Users