import React from 'react';
import stl from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img className={stl.contentImage}
                     src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"
                     alt=""/>
            </div>
            <div className={stl.descriptionBlock}>
                ava + description
            </div>
        </div>

    );
};

export default ProfileInfo;