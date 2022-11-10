import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
  textbox:{
    padding: 10,
    margin: 10,
    width: "70%",
    height: 50,
    fontSize: 30,
    borderRadius: 7,
    backgroundColor: "#ffffff"
  },
  inputContainer:{
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  addButton:{
    backgroundColor: '#fafafa',
    borderRadius: 20,
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  }
  
})

export default styles