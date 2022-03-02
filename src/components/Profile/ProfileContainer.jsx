import React from 'react';
import {connect} from 'react-redux';
import Profile from "./Profile";
import {getStatus, getUserProfile, updateStatus} from "../../redux/profileReducer";
import {compose} from "redux";
import {withUrlMatch} from "../../hoc/withUrlMatch";


class ProfileClassContainer extends React.Component {

    componentDidMount() {
        const userId = this.props.match ? this.props.match.params.userId : 2;
        this.props.getUserProfile(userId);
        this.props.getStatus(userId);
    }

    render() {
        return (
            <div>
                <Profile
                    {...this.props}
                    profile={this.props.profile}
                    status={this.props.status}
                    updateStatus={this.props.updateStatus}
                />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
});

export default compose(
    connect(mapStateToProps, {getUserProfile, getStatus, updateStatus}),
    withUrlMatch
)(ProfileClassContainer);