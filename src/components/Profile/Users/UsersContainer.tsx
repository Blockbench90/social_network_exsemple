import React from "react";
import {connect} from "react-redux";
import {
    follow, followTC, getUsers,
    setCurrentPage,
    setTotalUsersCount,
    setUsers, toggleFollowingProgress,
    toggleIsFetching,
    unfollow, unfollowTC
} from "../../../redux/users-reducer";
import Users from "./Users";
import Preloader from "../../../common/Preloader/Preloader";
import {UserType} from "../../../redux/type/type";
import {AppStateType} from "../../../redux/redux-store";


type MapDispatchPropsType = {
    follow: (userId: number)=> void
    unfollow: (userId: number)=> void
    toggleFollowingProgress: (isFetching: boolean, userId: number) => void
    unfollowTC: (userId: number) => void
    followTC: (userId: number) => void
    getUsers: (currentPage: number, pageSize: number) => void
}
type MapStatePropsType = {
    currentPage: number
    pageSize: number
    isFetching: boolean
    totalUsersCount: number
    users: Array<UserType>
    followingInProgress: Array<number>
}
type OwnPropsType = {
    pageTitle: string
}
type PropsType = MapStatePropsType & MapDispatchPropsType & OwnPropsType
class UsersContainer extends React.Component<PropsType> {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)

    }

    onPageChanged = (pageNumber: number) => {
        this.props.getUsers(pageNumber, this.props.pageSize)
    }

    render() {
        return <>
            <h2>{this.props.pageTitle}</h2>
            {this.props.isFetching ? <Preloader/> :
        <Users currentPage={this.props.currentPage}
                      onPageChanged={this.onPageChanged}
                      users={this.props.users}
                      follow={this.props.follow}
                      unfollow={this.props.unfollow}
                      totalUsersCount={this.props.totalUsersCount}
                      pageSize={this.props.pageSize}
               followingInProgress={this.props.followingInProgress}
               toggleFollowingProgress={this.props.toggleFollowingProgress}
               unfollowTC={this.props.unfollowTC}
               followTC={this.props.followTC}
        />}
        </>
    }
}


let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        currentPage: state.usersPage.currentPage,
        totalUsersCount: state.usersPage.totalUsersCount,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}

const UserContainer = connect<MapStatePropsType, MapDispatchPropsType, OwnPropsType, AppStateType>(mapStateToProps, {follow, unfollow, toggleFollowingProgress, unfollowTC, followTC, getUsers  })(UsersContainer)
export default UserContainer;
