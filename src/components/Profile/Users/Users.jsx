import React from "react";
import style from "./Users.module.css";
import userPhoto from "../../../assets/images/user.png";
import * as axios from "axios";



class Users extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
            }
        )
    }
    onPageChanged (pageNumber) {
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
                this.props.setUsers(response.data.items)
            }
        )

    }
    render() {
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
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
                                return <a className={this.props.currentPage === p && style.selectedPage}
                                onClick={(e) => {this.onPageChanged(p)}}>{p}</a>
                            })}
                        </div>
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