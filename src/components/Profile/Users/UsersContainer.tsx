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

type PropsType = {
    currentPage: number
    pageSize: number
    isFetching: boolean
    totalUsersCount: number
    users: Array<UserType>
    follow: ()=> void
    unfollow: ()=> void
    followingInProgress: Array<number>
    toggleFollowingProgress: () => void
    unfollowTC: () => void
    followTC: () => void
    getUsers: (currentPage: number, pageSize: number) => void
}

class UsersContainer extends React.Component<PropsType> {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)

    }

    onPageChanged = (pageNumber: number) => {
        this.props.getUsers(pageNumber, this.props.pageSize)
    }

    render() {
        return <>
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


let mapStateToProps = (state: AppStateType) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        currentPage: state.usersPage.currentPage,
        totalUsersCount: state.usersPage.totalUsersCount,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}

const UserContainer = connect(mapStateToProps, {follow, unfollow, setUsers,
    setCurrentPage,setTotalUsersCount, toggleIsFetching,
    toggleFollowingProgress, getUsers, followTC, unfollowTC})(UsersContainer)
export default UserContainer;
//5 lesson 38 min