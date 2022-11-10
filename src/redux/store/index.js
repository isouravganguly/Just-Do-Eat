import taskReducer from "../TaskReducer"
import filterReducer from "../FilterReducer"
import { configureStore } from "@reduxjs/toolkit"

const store = configureStore({
  reducer: { // Can also use combined Reducer
    todoapp: taskReducer,   // for array of todos
    filter: filterReducer,  // for filtering -- All, Completed, Active ...
  }
})

export default store