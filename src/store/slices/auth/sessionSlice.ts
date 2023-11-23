import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { SLICE_BASE_NAME } from './constants'

export interface SessionState {
    signedIn: boolean
    token: string | null
    isSuper: boolean
    isOrganizationActive: boolean | null
}

const initialState: SessionState = {
    signedIn: false,
    token: null,
    isSuper: false,
    isOrganizationActive: false,
}

const sessionSlice = createSlice({
    name: `${SLICE_BASE_NAME}/session`,
    initialState,
    reducers: {
        signInSuperUser(state, action: PayloadAction<boolean>) {
            state.isSuper = action.payload
        },
        signInSuccess(state, action: PayloadAction<string>) {
            state.signedIn = true
            state.token = action.payload
        },
        signOutSuccess(state) {
            state.signedIn = false
            state.token = null
            state.isSuper = false
            state.isOrganizationActive = false
        },
        setIsOrganizationActive(state, action: PayloadAction<boolean>) {
            state.isOrganizationActive = action.payload
        },
    },
})

export const {
    signInSuccess,
    signOutSuccess,
    signInSuperUser,
    setIsOrganizationActive,
} = sessionSlice.actions
export default sessionSlice.reducer
