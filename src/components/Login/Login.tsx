import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Input} from "../../common/FormControls/FormControls";
import {required} from "../../utils/validators";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import {AppStateType} from "../../redux/redux-store";



const LoginForm: React.FC<InjectedFormProps<LoginFormValuesType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name={'email'} component={Input} validate={[required]} placeholder={'Email'}/>
            </div>
            <div>
                <Field name={'password'} type={'password'} component={Input} validate={[required]}
                       placeholder={'Password'}/>
            </div>
            <div>
                <Field name={'rememberMe'} component={Input} type={'checkbox'}/>remember me
            </div>
            <div>
                <button>Submit</button>
            </div>
        </form>
    )
}
const LoginReduxForm = reduxForm<LoginFormValuesType>({form: 'login'})(LoginForm)

type MapStatePropsType = {
    isAuth: boolean
}
type MapDispatchPropsType = {
    login: (email: string, password: string, rememberMe: boolean) => void
}
type LoginFormValuesType = {
    email: string
    password: string
    rememberMe: boolean
}
const Login: React.FC<MapStatePropsType & MapDispatchPropsType> = (props) => {
    const onSubmit = (formData: LoginFormValuesType) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }
    if (props.isAuth) {
        return <Redirect to={'/profile'}/>
    }
    return (
        <div>
            <h1>LOGIN</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}
const mapStateToProps = (state: AppStateType): MapStatePropsType => ({
    isAuth: state.auth.isAuth
})
export default connect(mapStateToProps, {login})(Login);