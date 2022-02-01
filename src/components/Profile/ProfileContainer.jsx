import React from 'react';
import {connect} from 'react-redux';
import Profile from "./Profile";
import axios from "axios";
import {setUserProfile} from "../../redux/profileReducer";
import {useMatch} from 'react-router-dom';


class ProfileClassContainer extends React.Component {

    componentDidMount() {
        const userId = this.props.match ? this.props.match.params.userId : 2;
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
            .then(response => {
                this.props.setUserProfile(response.data);
            });
    }

    render() {
        return (
            <div>
                <Profile {...this.props} profile={this.props.profile}/>
            </div>
        );
    }
}

const ProfileUrlMatch = (props) => {
    const match = useMatch('profile/:userId/');
    return <ProfileClassContainer {...props} match={match}/>;
};

const mapStateToProps = state => {
    return {
        profile: state.profilePage.profile,
    };
};

const ProfileContainer = connect(mapStateToProps, {setUserProfile})(ProfileUrlMatch);

export default ProfileContainer;