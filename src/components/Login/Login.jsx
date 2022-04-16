import React from 'react';
import {reduxForm} from "redux-form";
import stl from "../_UI/FormsControls/FormsControl.module.css";
import {createField, Input} from "../_UI/FormsControls/FormsControl";
import {required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../redux/authReducer";
import {Navigate} from "react-router-dom";


const Login = (props) => {
    const onSubmit = ({email, password, rememberMe, captcha}) => {
        props.login(email, password, rememberMe, captcha);
    }

    if (props.isAuth) return <Navigate to={'/profile'}/>
    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm
                onSubmit={onSubmit}
                captchaUrl={props.captchaUrl}
            />
        </div>
    );
};

const LoginForm = ({handleSubmit, error, captchaUrl}) => {
    return (
        <form onSubmit={handleSubmit}>
            {createField('Email', 'email', [required], Input)}
            {createField('Password', 'password', [required], Input, {type: 'password'})}
            {createField(null, 'rememberMe', [], Input, {type: 'checkbox'}, 'remember me')}
            {captchaUrl && <img src={captchaUrl} alt={''}/>}
            {captchaUrl && createField('Symbols from image', 'captcha', [required], Input)}
            {error && <div className={stl.formSummaryError}>{error}</div>}
            <div>
                <button>Login</button>
            </div>
        </form>
    );
};

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);

const mapStateToProps = state => ({
    captchaUrl: state.auth.captchaUrl,
    isAuth: state.auth.isAuth,
});

export default connect(mapStateToProps, {login})(Login);