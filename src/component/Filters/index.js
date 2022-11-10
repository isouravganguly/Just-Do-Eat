import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { useDispatch } from 'react-redux'

//User-defined library
import { active, completed, all } from '../../redux/FilterReducer'

//styles --
import styles from './styles'

const Filter = () => {

    const dispatch = useDispatch()

    return (
       <View style = {styles.filterContainer}>

        {/* "all" Icon */}
      <TouchableOpacity
      style = {[styles.filterButton, styles.shadow, styles.All]}
      onPress={()=> dispatch(all())}>
        <Text style = {styles.filterText}>All</Text>
      </TouchableOpacity>

      {/* Completed Icon */}
      <TouchableOpacity 
      style = {[styles.filterButton, styles.shadow,, styles.Completed]} 
      onPress={()=> dispatch(completed())}>
        <Text style = {styles.filterText}>Completed</Text>

        {/* Active Icon */}
      </TouchableOpacity>
      <TouchableOpacity 
      style = {[styles.filterButton, styles.shadow, styles.Active]} 
      onPress={()=> dispatch(active())}>
        <Text style = {styles.filterText}>Active</Text>
      </TouchableOpacity>
    </View>
      )
}

export default Filter

