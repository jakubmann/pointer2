import { createSlice } from '@reduxjs/toolkit'
import 'react-native-get-random-values'
import { v4 as uuidv4 } from 'uuid'

export const activitySlice = createSlice({
	name: 'activity',
	initialState: {
		activities: [],
	},
	reducers: {
		addActivity: (state, action) => {
			let { name, points, type } = action.payload
			const activity = {
				id: uuidv4(),
				name,
				points,
				type,
			}

			state.activities.push(activity)
		},
	},
})

export const { addActivity } = activitySlice.actions
export default activitySlice.reducer
