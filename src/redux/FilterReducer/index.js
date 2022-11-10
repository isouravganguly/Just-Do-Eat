import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    filter: "all"
}
// Assign state of filter -- All, Completed, Active ...
export const FilterSlice = createSlice({
    name: "filters",
    initialState,
    reducers:{
        completed: state => {
            state.filter = "completed"
        },
        active: state => {state.filter = "active"},
        all: state => {state.filter = "all"}
        }
    }
)

export const {completed, active, all} = FilterSlice.actions
export default FilterSlice.reducer