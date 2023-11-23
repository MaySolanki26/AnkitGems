import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { SLICE_BASE_NAME } from './constants'

export type UserState = {
    id: string
    firstName: string
    lastName: string
    email: string
    phone: string
    status: string
    roleId: number
    createdAt: string
    updatedAt: string
    role: {
        id: number
        roleName: string
        isSystem: boolean
        isDefault: boolean
        rolePermissions: {
            id: number
            canCreate: boolean
            canModify: boolean
            canView: boolean
            canDelete: boolean
            canManage: boolean
            masterId: number
            roleId: number
            createdAt: string
            updatedAt: string
        }[]
    }
}

const initialState: UserState = {
    id: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    status: '',
    roleId: 0,
    createdAt: '',
    updatedAt: '',
    role: {
        id: 0,
        roleName: '',
        isSystem: false,
        isDefault: false,
        rolePermissions: [],
    },
}

const userSlice = createSlice({
    name: `${SLICE_BASE_NAME}/user`,
    initialState,
    reducers: {
        setUser(state, action: PayloadAction<UserState | null>) {
            if (action.payload) {
                state.id = action.payload.id || '' // Provide a default value if it's undefined
                state.firstName = action.payload.firstName || ''
                state.lastName = action.payload.lastName || ''
                state.email = action.payload.email || ''
                state.phone = action.payload.phone || ''
                state.status = action.payload.status || ''
                state.roleId = action.payload.roleId || 0 // Provide a default value for numbers
                state.createdAt = action.payload.createdAt || ''
                state.updatedAt = action.payload.updatedAt || ''
                state.role = action.payload.role || {
                    id: 0,
                    roleName: '',
                    isSystem: false,
                    isDefault: false,
                    rolePermissions: [],
                }
            }
        },
    },
})

export const { setUser } = userSlice.actions
export default userSlice.reducer
