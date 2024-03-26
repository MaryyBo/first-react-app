import React, { Component } from 'react';
import { SIGN_UP_SCHEMA } from '../../schemas';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const initialState = {
    email: '',
    password: '',
    firstName: '',
    lastName: ''
}


function SignUpForm(props) {

    const handleSubmitToFormik = (values, actions) => {
        console.log(values)
        console.log('дії', actions)
        actions.resetForm();
    }

    return (
        <Formik
            initialValues={initialState}
            onSubmit={handleSubmitToFormik}
            validationSchema ={SIGN_UP_SCHEMA}>

            {(formikProps) => {
                console.log(formikProps);
                return (
                    <Form style={{display: 'flex', flexDirection: 'column' }}>
                        <Field name='firstName' placeholder='Type your first name' />
                        <ErrorMessage  name='firstName' component='p'/>
                        <Field name='lastName' placeholder='Type your last name' />
                        <ErrorMessage  name='lastName' component='p'/>
                        <Field name='email' placeholder='Type your email' />
                        <ErrorMessage  name='email' component='p'/>
                        <Field name='password' placeholder='Type your password' />
                        <ErrorMessage  name='password' component='p'/>

                        <button type='submit'>Submit</button>
                    </Form>
                );
            }}
        </Formik>
    );
}

export default SignUpForm;
