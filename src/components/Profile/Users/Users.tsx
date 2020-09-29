import React from "react";
import style from "./Users.module.css";
import userPhoto from "../../../assets/images/user.png";
import {NavLink} from "react-router-dom";
import Paginator from "./Paginator";


const Users = (props) => {
    return (
        <div className={style.NavbarWrapper}>
            <div className={style.Container}>
                <section>
                    <div className={style.buttonPage}>
                        <Paginator currentPage={props.currentPage} onPageChanged={props.onPageChanged} totalItemsCount={props.totalUsersCount} pageSize={props.pageSize}/>
                    </div>
                    {props.users.map(user => <div key={user.id}>
                            <div>
                                <NavLink to={"profile/" + user.id}>
                                    <img src={user.photos.small != null ? user.photos.small : userPhoto} className={style.userPhoto}/>
                                </NavLink>
                                {/*если с API пришло photos.small, и оно не null, отобрази его, иначе отрисуй шаблонную фотку юзера, которую мы захардкодили импортом*/}
                            </div>
                            <div>
                                {user.followed ?
                                    <button disabled={props.followingInProgress.some(id => id === user.id)}
                                            onClick={() => {props.unfollowTC(user.id)}}>Unfollow</button>
                                    : <button disabled={props.followingInProgress.some(id => id === user.id)}
                                              onClick={() => {props.followTC(user.id)}}>Follow</button>}
                            </div>
                            <span>
                                <div>{user.fullName}</div>
                                <div>{user.status}</div>
                            </span>
                            <span>
                                <div>'user.location.country'</div>
                                <div>'user.location.city'</div>
                            </span>
                        </div>)
                    }
                </section>
            </div>
        </div>
    )
}
export default Users;