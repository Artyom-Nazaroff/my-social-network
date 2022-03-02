import React from 'react';

class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    }

    deactivateEditMode = () => {
        this.setState({
            editMode: false
        });
        this.props.updateStatus(this.state.status);
    }

    onStatusChange = (event) => {
        this.setState({
            status: event.currentTarget.value
        });
    }

    render() {
        return (
            <div>
                {!this.state.editMode
                    ?
                    <div>
                        <span
                            style={{cursor: 'pointer'}}
                            onClick={this.activateEditMode}
                        >
                            {this.props.status}
                        </span>
                    </div>
                    :
                    <div>
                        <input
                            type="text"
                            autoFocus={true}
                            onBlur={this.deactivateEditMode}
                            value={this.state.status}
                            onChange={this.onStatusChange}
                        />
                    </div>
                }
            </div>
        )
    }
}

export default ProfileStatus;