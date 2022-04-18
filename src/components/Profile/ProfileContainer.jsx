import React from 'react';
import {connect} from 'react-redux';
import Profile from "./Profile";
import {getStatus, getUserProfile, savePhoto, updateStatus, saveProfile} from "../../redux/profileReducer.ts";
import {compose} from "redux";
import {withUrlMatch} from "../../hoc/withUrlMatch";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";


class ProfileClassContainer extends React.Component {

    refreshProfile() {
        const userId = this.props.match
            ? this.props.match.params.userId
            : this.props.authorizedUserId;
        this.props.getUserProfile(userId);
        this.props.getStatus(userId);
    };

    componentDidMount() {
        this.refreshProfile();
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.match?.params.userId !== prevProps.match?.params.userId) this.refreshProfile();
    };

    render() {
        return (
            <div>
                <Profile
                    {...this.props}
                    isOwner={!this.props.match?.params.userId}
                    profile={this.props.profile}
                    status={this.props.status}
                    updateStatus={this.props.updateStatus}
                    savePhoto={this.props.savePhoto}
                />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.userId,
    isAuth: state.auth.isAuth,
});

export default compose(
    connect(mapStateToProps, {getUserProfile, getStatus, updateStatus, savePhoto, saveProfile}),
    withAuthRedirect,
    withUrlMatch
)(ProfileClassContainer);