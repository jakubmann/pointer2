import { configureStore } from '@reduxjs/toolkit'
import activityReducer from './slices/activitySlice'
import historyReducer from './slices/activitySlice'
import inputReducer from './slices/activitySlice'
import scoreReducer from './slices/activitySlice'

const reducer = {
	activity: activityReducer,
	history: historyReducer,
	input: inputReducer,
	score: scoreReducer,
}

export default configureStore({
	reducer,
})
