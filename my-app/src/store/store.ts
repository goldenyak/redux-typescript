import {applyMiddleware, createStore} from "redux";
import thunk from "redux-thunk";
import {rootReducer} from "./reducers";



export const store = createStore(rootReducer, applyMiddleware(thunk)) // Тут создаем главный store и импортируем в него наш главный reducer + дополнительно thunk