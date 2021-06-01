import { createSlice } from '@reduxjs/toolkit'
const initialState = {
	activityModal: {
		name: '',
		points: '',
		type: 'add',
	},
}

export const inputSlice = createSlice({
	name: 'input',
	initialState,
	reducers: {
		setActivityModalInput: (state, action) => {
			//Modify only value specified in action 
			state.activityModal = {
				...state.activityModal,
				...action.payload,
			}
			console.log(action.payload)
		},
		clearActivityModalInput: (state) => {
			state.activityModal = initialState.activityModal
		},
	},
})

export const { setActivityModalInput, clearActivityModalInput } =
	inputSlice.actions
export default inputSlice.reducer
