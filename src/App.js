import './App.css';
import Navbar from "./components/Navbar/Navbar";
import {Routes, Route} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {Component} from "react";
import {connect} from "react-redux";
import {initializeApp} from "./redux/appReducer";
import Preloader from "./components/_UI/Preloader/Preloader";

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
                    <Routes>
                        <Route path={'login'} element={<Login/>}/>
                        <Route path={'profile'} element={<ProfileContainer/>}/>
                        <Route path={'profile/:userId'} element={<ProfileContainer/>}/>
                        <Route path={'messages'} element={<DialogsContainer/>}/>
                        <Route path={'users'} element={<UsersContainer/>}/>
                    </Routes>
                </div>
            </div>
        );
    };
}

const mapStateToProps = state => ({
    initialized: state.app.initialized,
})

export default connect(mapStateToProps, {initializeApp})(App);
