import React from 'react';
import stl from './Profile.module.css';

const Profile = () => {
    return (
        <div className={stl.content}>
            <div>
                <img className={stl.contentImage}
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
                <div className={stl.posts}>
                    Posts
                    <div className={stl.postItem}>
                        Post 1
                    </div>
                    <div className={stl.postItem}>
                        Post 2
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;