import React, {useEffect, useState} from 'react';

const ProfileStatusWithHooks = (props) => {
    const [editMode, setEditMode] = useState(false);
    const [status, setStatus] = useState(props.status);

    useEffect(() => {
        setStatus(props.status);
    }, [props.status]);

    const activateEditMode = () => {
        setEditMode(true);
    };

    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateStatus(status);
    };

    const onStatusChange = (event) => {
        setStatus(event.target.value);
    };

    return (
        <div style={{marginBottom: 10}}>
            {!editMode
                ?
                <div>
                    <span>Status: </span>
                    <span
                        style={{cursor: 'pointer'}}
                        onClick={activateEditMode}
                    >
                            {props.status || '---No-status---'}
                        </span>
                </div>
                :
                <div>
                    <b>Status: </b>
                    <input
                        type="text"
                        autoFocus={true}
                        onBlur={deactivateEditMode}
                        value={status}
                        onChange={onStatusChange}
                    />
                </div>
            }
        </div>
    );
};

export default ProfileStatusWithHooks;