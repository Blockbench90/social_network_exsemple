import React, {ChangeEvent} from "react";

type PropsType = {
    status: string
    updateProfileStatus: (newStatus: string) => void
}
type StateType = {
    editMode: boolean
    status: string
}
class ProfileStatus extends React.Component<PropsType, StateType> {
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
    onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            status: e.currentTarget.value
        })
    }
    componentDidUpdate(prevProps: PropsType, prevState: StateType) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    }

    render() {
        return <div>
            {!this.state.editMode &&
            <div>
                <span onDoubleClick={this.activateEditMode}>{this.state.status || '--------'}</span>
            </div>}
            {this.state.editMode &&
            <div>
                <input type="text" value={this.state.status} onBlur={this.deactivateEditMode} autoFocus={true} onChange={this.onStatusChange}/>
            </div>}

        </div>
    }
}
export default ProfileStatus;