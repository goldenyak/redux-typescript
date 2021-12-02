export interface InitialStateType {
    users: any[],
    loading: boolean,
    error: null | string,
}  // Тут типизируем наш начальный state

// interface UserAction {
//     type: string,
//     payload?: any,
// }  // Тут типизируем наши action

export enum UserActionType {
    FETCH_USERS = "FETCH_USERS",
    FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS",
    FETCH_USERS_ERROR = "FETCH_USERS_ERROR",
}  // Через enum перечисляем все наши протипизированные action и заодно выносим их в const

interface FetchUsersActionType {
    type: UserActionType.FETCH_USERS
}  // Тут типизируем каждый ТИП action

interface FetchUsersSuccessActionType {
    type: UserActionType.FETCH_USERS_SUCCESS,
    payload: any[],
}  // Тут типизируем каждый ТИП action

interface FetchUsersErrorActionType {
    type: UserActionType.FETCH_USERS_ERROR,
    payload: string,
}  // Тут типизируем каждый ТИП action

export type UserAction = FetchUsersActionType | FetchUsersSuccessActionType | FetchUsersErrorActionType // Объединяем все наши action и передаем их в reducer

export const initialState: InitialStateType = {
    users: [],
    loading: false,
    error: null,
} // Тут создаем начальное состояние нашего state, с которым потом будем работать