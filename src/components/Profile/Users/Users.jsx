import React from "react";
import style from "./Users.module.css";
import userPhoto from "../../../assets/images/user.png";
import * as axios from "axios";



class Users extends React.Component {
    constructor(proos) {
        super(proos);
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
                this.props.setUsers(response.data.items)
            }
        )
    }
    render() {
        return (
            <div className={style.NavbarWrapper}>
                <div className={style.Container}>
                    <section>
                        {
                            this.props.users.map(user => <div key={user.id}>
                                <div>
                                    <img src={user.photos.small != null ? user.photos.small : userPhoto} className={style.userPhoto}/>
                                    {/*если с API пришло photos.small, и оно не null, отобрази его, иначе отрисуй шаблонную фотку юзера, которую мы захардкодили импортом*/}
                                </div>
                                <div>
                                    {user.followed ?
                                        <button onClick={() => {
                                            this.props.unfollow(user.id)
                                        }}>Follow</button>
                                        : <button onClick={() => {
                                            this.props.follow(user.id)
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
}
export default Users;