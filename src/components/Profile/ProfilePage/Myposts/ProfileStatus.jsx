import React from "react";


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
            editMode: false,
        })
        this.props.updateProfileStatus(this.state.status)
    }
    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        })
    }
    render() {
        return <div>
            {!this.state.editMode &&
            <div>
                <span onDoubleClick={this.activateEditMode}>{this.state.status || '--------'}</span>
            </div>}
            {this.state.editMode &&
            <div>
                <input type="text" value={this.state.status} onBlur={this.deactivateEditMode} onFocus={true} onChange={this.onStatusChange}/>
            </div>}

        </div>
    }
}
export default ProfileStatus;