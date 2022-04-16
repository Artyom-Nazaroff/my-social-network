import React from "react";
import stl from './ProfileInfo.module.css';
import {createField, Input, Textarea} from "../../_UI/FormsControls/FormsControl";
import {reduxForm} from "redux-form";


const ProfileDataForm = ({profile, handleSubmit, error}) => {
    return <form onSubmit={handleSubmit}>
        <div>
            <b>Full name</b>: {createField('Full name', 'fullName', [], Input)}
        </div>
        <div>
            <b>Looking for a job</b>: {createField('', 'lookingForAJob', [], Input, {type: 'checkbox'})}
        </div>
        <div>
            <b>My professional
                skills</b>: {createField('My professional skills', 'lookingForAJobDescription', [], Textarea)}
        </div>
        <div>
            <b>About me</b>: {createField('About me', 'aboutMe', [], Textarea)}
        </div>
        <div>
            <b>Contacts</b>: {Object.keys(profile.contacts).map(key => {
                return <div key={key} className={stl.contact}>
                    <b>{key}: {createField(key, `contacts.${key}`, [], Input)}</b>
                </div>
            }
        )}
        </div>
        {error && <div className={stl.formSummaryError}>{error}</div>}
        <div>
            <button>Save</button>
        </div>
    </form>
};

const ProfileDataFormReduxForm = reduxForm({form: 'editProfile'})(ProfileDataForm);

export default ProfileDataFormReduxForm;