import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useTypesSelector} from "../hooks/useTypesSelector";
import {fetchUsers} from "../store/actionCreators/user";

const UserList: React.FC = () => {

    const {users, loading, error} = useTypesSelector(state => state.user) // С помощью типизированного кастомного useSelector вынимаем состояние нашего приложения в любом компоненте

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchUsers())
    }, [])

    if (loading === true) {
        return <h1>Идет загрузка пользователей...</h1>
    }
    if (error) {
        return <h1>{error}</h1>
    }

    return (
        <div>
            {users.map(user =>
            <div>{user.name}</div>)}
        </div>
    );
};

export default UserList;
