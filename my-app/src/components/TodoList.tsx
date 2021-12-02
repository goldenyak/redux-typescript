import React, {useEffect} from 'react';
import {useTypesSelector} from "../hooks/useTypesSelector";
import {useDispatch} from "react-redux";
import {fetchUsers} from "../store/actionCreators/user";
import {fetchTodos} from "../store/actionCreators/todos";

const TodoList: React.FC = () => {

    const {todos, loading, page, limit, error} = useTypesSelector(state => state.todo)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchTodos(page, limit))
    }, [])

    if (loading === true) {
        return <h1>Идет загрузка списка дел...</h1>
    }
    if (error) {
        return <h1>{error}</h1>
    }

    return (
        <div>
            {todos.map(todo =>
            <div key={todo.id}>{todo.id} - {todo.title}</div>)}
        </div>
    );
};

export default TodoList;
