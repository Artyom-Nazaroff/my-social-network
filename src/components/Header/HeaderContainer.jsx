import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {logout, setAuthUser} from "../../redux/authReducer";

class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.setAuthUser();
    }

    render() {
        return <Header {...this.props}/>
    }
}

const mapStateToProps = state => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
});

export default connect(mapStateToProps, {setAuthUser, logout})(HeaderContainer);