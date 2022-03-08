import React from 'react';
import {Field, reduxForm} from "redux-form";
import stl from "../_UI/FormsControls/FormsControl.module.css";
import {Input} from "../_UI/FormsControls/FormsControl";
import {required} from "../../utils/validators/validators";

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    type="text"
                    name={'login'}
                    validate={[required]}
                    placeholder={'Login'}
                    component={Input}
                />
            </div>
            <div>
                <Field
                    type="password"
                    name={'password'}
                    validate={[required]}
                    placeholder={'Password'}
                    component={Input}
                />
            </div>
            <div>
                <Field
                    type="checkbox"
                    name={'rememberMe'}
                    component={Input}
                /> Remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    );
};

const LoginReduxForm = reduxForm({
    // a unique name for the form
    form: 'login',
})(LoginForm);

const Login = (props) => {
    const onSubmit = formData => {
        console.log(formData)
    }
    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    );
};

export default Login;