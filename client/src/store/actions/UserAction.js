import { GetUser, PostUser, DeleteUser, UpdateUser } from '../../services/StoreServices'
import { GET_USER, IS_LOGGEDIN, NEW_USER, DELETE_USER, UPDATE_USER } from '../types'

export const LogIn = () => ({
    type: IS_LOGGEDIN,
    payload: true
})

export const LogOut = () => ({
    type: IS_LOGGEDIN,
    payload: false
})

export const LoadUser = () => {
    return async (dispatch) => {
        try {
            const user = await GetUser()
            dispatch({
                type: GET_USER,
                payload: user
            })
        } catch (error) {
            throw error
        }
    }
}

export const updateNewUser = (newUser) => ({
    type: NEW_USER,
    payload: newUser
})

export const SendNewUser = (form) => {
    return async (dispatch) => {
        try {
            const newUser = await PostUser(form)
            dispatch({
                type: NEW_USER,
                payload: newUser
            })
            console.log(form)
            console.log(newUser)
        } catch (error) {
            throw error
        }
    }
}

export const UserToDelete = (id) => {
    return async (dispatch) => {
        try {
            const deleteUser = await DeleteUser(id)
            dispatch({
                type: DELETE_USER,
                payload: deleteUser
            })
        } catch (error) {
            throw error
        }
    }
}

export const UpdateCurrentUser = (currentUser) => ({
    type: UPDATE_USER,
    payload: currentUser
})

export const UserToUpdate = (id, form) => {
    return async (dispatch) => {
        try {
            const updateUser = await UpdateUser(id, form)
            dispatch({
                type: UPDATE_USER,
                payload: updateUser
            })
            console.log(id)
            console.log(form)
        } catch (error) {
            throw error
        }
    }
}

