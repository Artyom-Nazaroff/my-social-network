import React from 'react';
import {connect} from 'react-redux';
import Profile from "./Profile";
import {getUserProfile} from "../../redux/profileReducer";
import {useMatch} from 'react-router-dom';


class ProfileClassContainer extends React.Component {

    componentDidMount() {
        const userId = this.props.match ? this.props.match.params.userId : 2;
        this.props.getUserProfile(userId);
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

const ProfileContainer = connect(mapStateToProps, {getUserProfile})(ProfileUrlMatch);

export default ProfileContainer;