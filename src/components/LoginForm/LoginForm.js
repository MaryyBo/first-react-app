import React, { Component } from 'react';
import { SIGN_UP_SCHEMA } from '../../schemas';
import { Formik, Form, Field } from 'formik';

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
        <Formik initialValues={initialState} onSubmit={handleSubmitToFormik}>
            {(formikProps) => {
                console.log(formikProps);
                return (
                    <Form >
                        <Field name='firstName' placeholder='Type your first name' />
                        <Field name='lastName' placeholder='Type your last name' />
                        <Field name='email' placeholder='Type your email' />
                        <Field name='password' placeholder='Type your password' />

                        <button type='submit'>Submit</button>
                    </Form>
                );
            }}
        </Formik>
    );
}

export default SignUpForm;
