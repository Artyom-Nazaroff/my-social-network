import React from 'react';
import {Field, reduxForm} from "redux-form";
import stl from "../_UI/FormsControls/FormsControl.module.css";
import {Input} from "../_UI/FormsControls/FormsControl";
import {required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../redux/authReducer";
import {Navigate} from "react-router-dom";

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    type="text"
                    name={'email'}
                    validate={[required]}
                    placeholder={'Email'}
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

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);

const Login = (props) => {
    const onSubmit = ({email, password, rememberMe}) => {
        props.login(email, password, rememberMe);
    }

    if (props.isAuth) return <Navigate to={'/profile'}/>
    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    );
};

const mapStateToProps = state => ({
    isAuth: state.auth.isAuth,
})


export default connect(mapStateToProps, {login})(Login);