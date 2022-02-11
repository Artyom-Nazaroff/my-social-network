import React from 'react';
import stl from './ProfileInfo.module.css';
import Preloader from "../../_UI/Preloader/Preloader";
import mainPicture from '../../../assets/images/main-page-picture.webp';
import profilePhoto from '../../../assets/images/user.png';

const ProfileInfo = ({profile}) => {
    if (!profile) {
        return <Preloader/>
    }
    return (
        <div>
            <div>
                <img className={stl.contentImage}
                     src={mainPicture}
                     alt=""/>
            </div>
            <div className={stl.descriptionBlock}>
                <img className={stl.profilePhoto}
                     src={profile.photos.large != null ? profile.photos.large : profilePhoto} alt=""/>
                <div className={stl.profileDescription}>
                    <h2 className={stl.userName}>{profile.fullName}</h2>
                    <p className={stl.userStatus}><span>Status: </span>{profile.aboutMe}</p>
                    <div className={stl.userContactsContainer}>
                        <h3 className={stl.userContactsTitle}>Contacts:</h3>
                        <ul className={stl.contactsList}>
                            {Object.keys(profile.contacts).map(item => {
                                return <li key={item}>
                                    <span>{item}: </span>
                                    {profile.contacts[item] ?
                                        <a href={'#'}>{profile.contacts[item]}</a> : <em>Information is absent</em>}
                                </li>
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default ProfileInfo;