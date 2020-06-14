import React from "react";
import style from "./Users.module.css";
import * as axios from "axios"
import userPhoto from "../../../assets/images/user.png"


let Users = (props) => {
    if (props.users.length === 0) {
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
                props.setUsers(response.data.items)
            }
        )
    }
    return (
        <div className={style.NavbarWrapper}>
            <div className={style.Container}>
                <section>
                    {
                        props.users.map(user => <div key={user.id}>
                            <div>
                                <img src={user.photoUrl != null ? user.photos.small : userPhoto} className={style.userPhoto}/>
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