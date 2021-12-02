import {combineReducers} from "redux";
import {userReducer} from "./userReducer";
import {todoReducer} from "./todoReducer";

export const rootReducer = combineReducers({
    user: userReducer,
    todo: todoReducer,
}) // Тут мы инициализируем наш главный reducer и все остальные reducers объединяем здесь через combineReducers

export type RootReducerType = ReturnType<typeof rootReducer> // Типизируем наш rootReducer