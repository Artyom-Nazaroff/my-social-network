import React from 'react';
import stl from './ProfileInfo.module.css';
import Preloader from "../../_UI/Preloader/Preloader";
import profilePhoto from '../../../assets/images/user.png';
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = ({isOwner, profile, status, updateStatus, savePhoto}) => {

    if (!profile) {
        return <Preloader/>
    }

    const onMainPhotoSelected = e => {
        if (e.target.files.length) savePhoto(e.target.files[0]);
    };

    return (
        <div>
            <div className={stl.descriptionBlock}>
                <div>
                    <img className={stl.profilePhoto} src={profile.photos?.large || profilePhoto} alt=""/>
                    {isOwner && <input type={"file"} onChange={e => onMainPhotoSelected(e)}/>}
                </div>
                <div className={stl.profileDescription}>
                    <h2 className={stl.userName}>{profile.fullName}</h2>
                    <ProfileStatusWithHooks
                        status={status}
                        updateStatus={updateStatus}
                    />
                    <p className={stl.userStatus}><span>About me: </span>{profile.aboutMe}</p>
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