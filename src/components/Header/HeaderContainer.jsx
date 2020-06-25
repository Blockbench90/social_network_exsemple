import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {setAuthUserData} from "../../redux/auth-reducer";
import * as axios from "axios";


class HeaderContainer extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true,
            headers: {
                'API-KEY': 'f0f287db-1451-40d2-ae8a-1a302f1200c2'
            }
        }).then(response => {
            if (response.data.resultCode === 0) {
                let {id, email, login} = response.data.data
                this.props.setAuthUserData(id, email, login)}
            }
        )
    }

    render() {
        return <Header {...this.props}/>
    }
}
const mapStateToProps = (state) => ({
    login: state.auth.login,
    isAuth: state.auth.isAuth
})
export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer) ;