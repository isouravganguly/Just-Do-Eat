import { Text, TextInput, View, TouchableOpacity } from 'react-native'
import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import Icon from "react-native-vector-icons/Feather"

// User-defined Components
import { addTodo } from '../../redux/TaskReducer'
import styles from './styles'

const Input = () => {
    const dispatch = useDispatch()
    const [text, onChangeText] = useState("")

    const addTask = ()=>{

      const  data= text.trim()      // Removing space before adding
      console.log(data)

      if(data !== "")     // Checking for Blank inputs
      {dispatch(
        addTodo({
          task: data,
        })
      )}
      else{
        alert("please enter valid text")      // Alert text shown
      }
      onChangeText("")
    }
  
  return (
    <View style = {styles.inputContainer}>
      <TextInput
      style = {styles.textbox}
        onChangeText={onChangeText}
        value = {text}
        onSubmitEditing = {() => addTask()}
        />
        <TouchableOpacity
        style = {styles.addButton}
        onPress = {()=>addTask()}>
          <Icon name="plus" size={30} />
        </TouchableOpacity>
    </View>
  )
}

export default Input

