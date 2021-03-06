import React, {Suspense} from "react";
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import {Routes, Route} from "react-router-dom";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {Component} from "react";
import {connect} from "react-redux";
import {initializeApp} from "./redux/appReducer.ts";
import Preloader from "./components/_UI/Preloader/Preloader";

// import DialogsContainer from "./components/Dialogs/DialogsContainer";
// import ProfileContainer from "./components/Profile/ProfileContainer";
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));


class App extends Component {

    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        if (!this.props.initialized) return <Preloader/>
        return (
            <div className={'app-wrapper'}>
                <HeaderContainer/>
                <Navbar/>
                <div className={'app-content'}>
                    <Suspense fallback={<div>Loading...</div>}>
                        <Routes>
                            <Route path={'/'} element={<ProfileContainer/>}/>
                            <Route path={'login'} element={<Login/>}/>
                            <Route path={'profile'} element={<ProfileContainer/>}/>
                            <Route path={'profile/:userId'} element={<ProfileContainer/>}/>
                            <Route path={'messages'} element={<DialogsContainer/>}/>
                            <Route path={'users'} element={<UsersContainer/>}/>
                            <Route path={'*'} element={<div>404 NOT FOUND</div>}/>
                        </Routes>
                    </Suspense>
                </div>
            </div>
        );
    };
}

const mapStateToProps = state => ({
    initialized: state.app.initialized,
})

export default connect(mapStateToProps, {initializeApp})(App);
