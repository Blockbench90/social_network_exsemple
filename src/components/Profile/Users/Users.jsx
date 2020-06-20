import React from "react";
import style from "./Users.module.css";
import userPhoto from "../../../assets/images/user.png";
import {NavLink} from "react-router-dom";


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
                                        <button onClick={() => {
                                            props.unfollow(user.id)
                                        }}>Follow</button>
                                        : <button onClick={() => {
                                            props.follow(user.id)
                                        }}>Unfollow</button>}
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