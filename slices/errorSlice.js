import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	activityModal: {
		nameError: false,
		pointsError: false,
	},
	messages: [],
}

export const errorSlice = createSlice({
	name: 'error',
	initialState,
	reducers: {
		addErrorMessage: (state, action) => {
			state.messages.push(action.payload)
		},
		setActivityModalError: (state, action) => {
			//Modify only value specified in action
			state.activityModal = {
				...state.activityModal,
				...action.payload,
			}
		},
		clearActivityModalError: (state) => {
			state.activityModal = initialState.activityModal
		},
		clearErrorMessage: (state) => {
			state.messages = initialState.messages
		},
	},
})

export const {
	addErrorMessage,
	clearErrorMessage,
	setActivityModalError,
	clearActivityModalError,
} = errorSlice.actions
export default errorSlice.reducer
