import React from 'react';
import {useMatch} from "react-router-dom";

export const withUrlMatch = Component => {
    const UrlMatch = props => {
        const match = useMatch('profile/:userId/');
        return <Component {...props} match={match}/>;
    }
    return UrlMatch;
}