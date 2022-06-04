import { StyleSheet } from "react-native";

const HeaderStyle = StyleSheet.create({
  image: {
    flex: 0.35,
    justifyContent: "center"
  },
  text: {
    flex: 1,
    color: "white",
    fontSize: 50,
    fontWeight: "bold",
    textAlign: "center",
    textAlignVertical: "center"
  }
});

export default HeaderStyle;
