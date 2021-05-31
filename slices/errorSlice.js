import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	activityModal: {
		titleLength: false,
		pointsLength: false,
	},
	message: '',
}

export const errorSlice = createSlice({
	name: 'error',
	initialState,
	reducers: {
		setErrorMessage: (state, action) => {
			state.message = action.payload
		},
		setActivityModalError: (state, action) => {
			state.activityModal = {
				...state.activityModal,
				...action.payload,
			}
		},
		clearActivityModalError: (state) => {
			state.activityModal = initialState.activityModal
		},
	},
})

export const {
	setErrorMessage,
	setActivityModalError,
	clearActivityModalError,
} = errorSlice.actions
export default errorSlice.reducer
