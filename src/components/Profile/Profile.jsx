import React from 'react';

const Profile = () => {
    return (
        <div className={'content'}>
            <div>
                <img className={'content-image'}
                     src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"
                     alt=""/>
            </div>
            <div>
                ava + description
            </div>
            <div>
                My posts
                <div>
                    New post
                </div>
                <div>
                    Posts
                </div>
            </div>
        </div>
    );
};

export default Profile;