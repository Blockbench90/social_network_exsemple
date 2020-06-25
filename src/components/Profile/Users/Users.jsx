import React from "react";
import style from "./Users.module.css";
import userPhoto from "../../../assets/images/user.png";
import {NavLink} from "react-router-dom";
import * as axios from "axios";


const Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
        return (
            <div className={style.NavbarWrapper}>
                <div className={style.Container}>
                    <section>
                        <div className={style.buttonPage}>
                            {pages.map( p => {
                                return <a className={props.currentPage === p && style.selectedPage}
                                onClick={(e) => {props.onPageChanged(p)}}>{p}</a>
                            })}
                        </div>
                        {
                            props.users.map(user => <div key={user.id}>
                                <div>
                                    <NavLink to={"profile/" + user.id}>
                                    <img src={user.photos.small != null ? user.photos.small : userPhoto} className={style.userPhoto}/>
                                    </NavLink>
                                    {/*если с API пришло photos.small, и оно не null, отобрази его, иначе отрисуй шаблонную фотку юзера, которую мы захардкодили импортом*/}
                                </div>
                                <div>
                                    {user.followed ?
                                        <button disabled={props.followingInProgress.some(id => id === user.id)} onClick={() => {
                                            props.toggleFollowingProgress(true, user.id)
                                            axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`,
                                                {
                                                    withCredentials: true,
                                                    headers: {
                                                        'API-KEY': 'f0f287db-1451-40d2-ae8a-1a302f1200c2'
                                                    }
                                                }).then(response => {
                                                    if (response.data.resultCode === 0) {
                                                        props.unfollow(user.id)
                                                    }
                                                props.toggleFollowingProgress(false, user.id)
                                                }
                                            )
                                        }}>Unfollow</button>
                                        : <button disabled={props.followingInProgress.some(id => id === user.id)} onClick={() => {
                                            props.toggleFollowingProgress(true, user.id)
                                            axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`,{},
                                                {
                                                    withCredentials: true,
                                                    headers: {
                                                        'API-KEY': 'f0f287db-1451-40d2-ae8a-1a302f1200c2'
                                                    }
                                                }).then(response => {
                                                    if(response.data.resultCode ===0) {
                                                        props.follow(user.id)
                                                    }
                                                props.toggleFollowingProgress(true, user.id)
                                                }
                                            )
                                        }}>Follow</button>}
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