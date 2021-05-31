import { configureStore } from '@reduxjs/toolkit'
import activityReducer from './slices/activitySlice'
import historyReducer from './slices/historySlice'
import inputReducer from './slices/inputSlice'
import scoreReducer from './slices/scoreSlice'
import errorReducer from './slices/errorSlice'

const reducer = {
	activity: activityReducer,
	history: historyReducer,
	input: inputReducer,
	score: scoreReducer,
	error: errorReducer,
}

export default configureStore({
	reducer,
})
