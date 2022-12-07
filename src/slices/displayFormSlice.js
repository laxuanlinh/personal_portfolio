import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	value: false
}

export const displayFormSlice = createSlice({

	name: "displayForm",
	initialState,
	reducers: {
		toggle: (state) => {
			state.value = !state.value
		}
	}

})

export const { toggle } = displayFormSlice.actions
export default displayFormSlice.reducer