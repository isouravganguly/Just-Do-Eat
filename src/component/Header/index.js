import { Text, View } from 'react-native'
import React from 'react'

//styles --
import styles from './styles'

const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <Text style = {styles.headerText}>Just Do Eat!</Text>
    </View>
  )
}

export default Header

