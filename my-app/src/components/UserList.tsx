import React from 'react';
import {useSelector} from "react-redux";

const UserList: React.FC = () => {

    const state = useSelector(state => state) // С помощью useSelector вынимаем состояние в любом компоненте
    console.log(state);
    return (
        <div>
            
        </div>
    );
};

export default UserList;
