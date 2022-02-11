import './App.css';
import Navbar from "./components/Navbar/Navbar";
import {Routes, Route} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";

const App = () => {

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
}

export default App;
