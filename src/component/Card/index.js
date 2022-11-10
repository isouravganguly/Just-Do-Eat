// Import library
import { Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Icon from "react-native-vector-icons/Feather"

//styles --
import styles from './styles'

const Card = ({onDone, onDelete, item}) => {

  const checked = item.done? [styles.strike, styles.text] : [styles.text] // Text style, based on task done?
  const checkIcon = item.done? "check-square" : "square"  // Icon based on task done?
  return (
    <View style = {[styles.card, styles.shadow]}>
      <TouchableOpacity onPress = {()=> onDone(item.id)}>
      <Icon name = {checkIcon} size= {30}/>
      </TouchableOpacity>

        <Text style = {checked}>{item.task}</Text>

      <TouchableOpacity style = {styles.cross} onPress = {()=> onDelete(item.id)}>
       <Icon name= "x-square" size={30} /> 
      </TouchableOpacity>
    </View>
  )
}

export default Card