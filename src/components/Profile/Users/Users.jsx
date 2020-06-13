import React from "react";
import style from "./Users.module.css";


let Users = (props) => {
    debugger;
    if (props.users.length === 0) {
        props.setUsers(
            [  {id: 1, photoUrl: 'https://bengali.oneindia.com/img/2018/05/premo-logo-and-character-08-1467968533-1527696408.jpg',
                followed: false, fullName: 'Dima', status: 'Good job', location: {city: 'Minsk', country: 'Belarus',}},
                {id: 2, photoUrl: 'https://bengali.oneindia.com/img/2018/05/premo-logo-and-character-08-1467968533-1527696408.jpg',
                    followed: true, fullName: 'Max', status: 'Good job', location: {city: 'Kyiv', country: 'Ukraine',}},
                {id: 3, photoUrl: 'https://bengali.oneindia.com/img/2018/05/premo-logo-and-character-08-1467968533-1527696408.jpg',
                    followed: false, fullName: 'Igor', status: 'Good job', location: {city: 'Moscow', country: 'Russia',}}]
        )
    }
    return (
        <div className={style.NavbarWrapper}>
            <div className={style.Container}>
                <section>
                    {
                        props.users.map(user => <div key={user.id}>
                            <div>
                                <img src={user.photoUrl} className={style.userPhoto}/>
                            </div>
                            <div>
                                {user.followed ?
                                    <button onClick={()=> {props.unfollow(user.id)}}>Follow</button>
                                    : <button onClick={() => { props.follow(user.id)}}>Unfollow</button>}
                            </div>
                            <span>
                                <div>{user.fullName}</div>
                                <div>{user.status}</div>
                            </span>
                            <span>
                                <div>{user.location.country}</div>
                                <div>{user.location.city}</div>
                            </span>
                        </div>)
                    }
                </section>
            </div>
        </div>
    )
}
export default Users;