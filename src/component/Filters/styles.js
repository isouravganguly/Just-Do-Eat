import { StyleSheet } from "react-native"

const styles = StyleSheet.create({

  filterContainer:{
    flexDirection: "row",
    justifyContent: 'space-around'
  },
  filterButton:{
    backgroundColor: "#fafafa",
    padding: 10,
    justifyContent: 'center',
    alignItems:'center',
    borderRadius: 8,
  },

  shadow:{
    shadowOffset: {
	  width: 0,
	  height: 1,
    },
    shadowOpacity: 0.5,
    shadowRadius: 3,

    elevation: 4,
  },

  Completed: {      // Shadow for Completed Icon
    shadowColor: "#1f93ff"
  },
  All: {      // Shadow for All  Icon
    shadowColor: "#ffe51f"
  },

  Active: {      // Shadow for Active Icon
    shadowColor: "#ff6d1f"
  },

  filterText:{
    fontSize: 20,
    fontWeight: "500",
  }
})

export default styles