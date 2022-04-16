import React, {useState} from 'react';
import stl from './ProfileInfo.module.css';
import Preloader from "../../_UI/Preloader/Preloader";
import profilePhoto from '../../../assets/images/user.png';
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import ProfileDataForm from "./ProfileDataForm";

const ProfileInfo = ({isOwner, profile, status, updateStatus, savePhoto, saveProfile}) => {
    const [editMode, setEditMode] = useState(false);

    if (!profile) {
        return <Preloader/>
    }

    const onMainPhotoSelected = e => {
        if (e.target.files.length) savePhoto(e.target.files[0]);
    };

    const onSubmit = formData => {
        saveProfile(formData).then(() => {
            setEditMode(false);
        });
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

                        {editMode
                            ? <ProfileDataForm
                                initialValues={profile}
                                profile={profile}
                                onSubmit={onSubmit}
                            />
                            : <ProfileData
                                profile={profile}
                                isOwner={isOwner}
                                goToEditMode={() => setEditMode(true)}
                            />
                        }

                        {/*<ul className={stl.contactsList}>*/}
                        {/*    {Object.keys(profile.contacts).map(item => {*/}
                        {/*        return <li key={item}>*/}
                        {/*            <span>{item}: </span>*/}
                        {/*            {*/}
                        {/*                profile.contacts[item]*/}
                        {/*                ? <a href={'#'}>{profile.contacts[item]}</a>*/}
                        {/*                : <em>Information is absent</em>*/}
                        {/*            }*/}
                        {/*        </li>*/}
                        {/*    })}*/}
                        {/*</ul>*/}
                    </div>
                </div>
            </div>
        </div>

    );
};

const ProfileData = ({profile, isOwner, goToEditMode}) => {
    return <div>
        <div>
            <b>Full name</b>: {profile.fullName}
        </div>
        <div>
            <b>Looking for a job</b>: {profile.lookingForAJob ? 'Yes' : 'No'}
        </div>
        {profile.lookingForAJob &&
            <div>
                <b>My professional skills</b>: {profile.lookingForAJobDescription}
            </div>
        }
        <div>
            <b>About me</b>: {profile.aboutMe}
        </div>
        <div>
            <b>Contacts</b>: {Object.keys(profile.contacts).map(key =>
            <Contact
                key={key}
                contactTitle={key}
                contactValue={profile.contacts[key]}
            />
        )}
        </div>
        {isOwner && <div>
            <button onClick={goToEditMode}>Edit profile</button>
        </div>}
    </div>
};


export const Contact = ({contactTitle, contactValue}) => {
    return <div className={stl.contact}>
        <b>{contactTitle}</b>: {contactValue}
    </div>
};

export default ProfileInfo;