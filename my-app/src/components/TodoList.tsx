import React, {useEffect} from 'react';
import {useTypesSelector} from "../hooks/useTypesSelector";
import {useDispatch} from "react-redux";
import {fetchTodos, setTodoPage} from "../store/actionCreators/todos";

const TodoList: React.FC = () => {

    const {todos, loading, page, limit, error} = useTypesSelector(state => state.todo)
    const pages = [1, 2, 3, 4, 5]

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchTodos(page, limit))
    }, [page])


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
            <div style={{display: 'flex'}}>
                {pages.map(p =>
                    <div onClick={() => dispatch(setTodoPage(p))}
                         style={{
                             padding: '10px',
                             border: p === page ? '2px solid green' : '1px solid grey'
                         }}>{p}</div>)}
            </div>

        </div>
    );
};

export default TodoList;
