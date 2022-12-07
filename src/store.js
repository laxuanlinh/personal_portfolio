import { configureStore } from '@reduxjs/toolkit'
import displayForm from './slices/displayFormSlice'

export const store = configureStore({
	reducer: {
		displayForm: displayForm
	}
})
