import React from 'react';
import {connect} from 'react-redux';
import Profile from "./Profile";
import {getUserProfile} from "../../redux/profileReducer";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {withUrlMatch} from "../../hoc/withUrlMatch";


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

const mapStateToProps = state => ({
    profile: state.profilePage.profile,
});

export default compose(
    connect(mapStateToProps, {getUserProfile}),
    withUrlMatch
)(ProfileClassContainer);