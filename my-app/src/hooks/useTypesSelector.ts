import {TypedUseSelectorHook, useSelector} from "react-redux";
import {RootReducerType} from "../store/reducers";

export const useTypesSelector: TypedUseSelectorHook<RootReducerType> = useSelector // Тут создаем кастомный хук и в generic ему передаем наш типизированный rootReducer