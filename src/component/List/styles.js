import { Dimensions, StyleSheet } from "react-native";

//Calculate height of phone screen ...
const height = Dimensions.get("window").height
// console.log(height)

const styles = StyleSheet.create({
    taskList:{
        marginTop: 20,
        maxHeight: (height - 330),
        minHeight: (height - 330),
    }
})

export default styles