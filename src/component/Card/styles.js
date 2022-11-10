import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
  card:{
    flexDirection: "row",
    padding: 10,
    marginVertical: 10,
    marginHorizontal: 20,
    alignItems: 'center',
    backgroundColor: "#ffffff",
    borderRadius: 8,
  },

  strike:{      // line-through Text
    textDecorationLine: 'line-through',
    color: 'gray'
  },

  text:{
    flex:1,
    flexWrap: 'wrap',
    fontSize: 30,
    paddingHorizontal: 15,
  },

  cross:{           // Delete icon
    position: 'absolute',
    right: 10,

  },
  shadow: {
    shadowColor: "#000",
  shadowOffset: {
	  width: 0,
	  height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  }
})

export default styles