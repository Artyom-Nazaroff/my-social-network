import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import {Routes, Route} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersClassContainer from "./components/Users/UsersClassContainer";

const App = () => {

    return (
        <div className={'app-wrapper'}>
            <Header/>
            <Navbar/>
            <div className={'app-content'}>
                <Routes>
                    <Route path={'profile'} element={<Profile/>}/>
                    <Route path={'messages'} element={<DialogsContainer/>}/>
                    <Route path={'users'} element={<UsersClassContainer/>}/>
                </Routes>
            </div>
        </div>
    );
}

export default App;
