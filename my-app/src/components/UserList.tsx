import React from 'react';
import {useSelector} from "react-redux";
import {useTypesSelector} from "../hooks/useTypesSelector";

const UserList: React.FC = () => {

    const {users, loading, error} = useTypesSelector(state => state.user) // С помощью типизированного кастомного useSelector вынимаем состояние нашего приложения в любом компоненте
    console.log(users);
    return (
        <div>
            
        </div>
    );
};

export default UserList;
