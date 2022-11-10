import { createSlice, nanoid } from "@reduxjs/toolkit"

const initialState = [] // initial State is  null

export const taskSlicer = createSlice({
  name: "todo",
  initialState,
  reducers:{
    
    addTodo : (state,action)=>{
      const newTask = {     // task added
        task: action.payload.task,
        done: false,
        id: nanoid()
      }
      state.push(newTask) // Task added to array
    },

    deleteTodo : (state, action) =>{    // Task Deleted
        return state.filter(todo => todo.id !== action.payload.id)
    },

    done: (state, action)=>{      //Task Completed
      state.find(todo => (todo.id === action.payload.id) && (todo.done = !todo.done) )
    },
  }
})

export const {addTodo, deleteTodo, done} = taskSlicer.actions
export default taskSlicer.reducer