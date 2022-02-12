import React from 'react';
import {connect} from 'react-redux';
import Profile from "./Profile";
import {getUserProfile} from "../../redux/profileReducer";
import {useMatch} from 'react-router-dom';
import {withAuthRedirect} from "../../hoc/withAuthRedirect";


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

const AuthRedirectComponent = withAuthRedirect(ProfileClassContainer);

const ProfileUrlMatch = (props) => {
    const match = useMatch('profile/:userId/');
    return <AuthRedirectComponent {...props} match={match}/>;
};

const mapStateToProps = state => ({
    profile: state.profilePage.profile,
})

const ProfileContainer = connect(mapStateToProps, {getUserProfile})(ProfileUrlMatch);

export default ProfileContainer;