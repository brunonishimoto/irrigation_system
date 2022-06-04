import { StyleSheet } from "react-native";

const SetTimeStyle = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: 'center',
    alignSelf: 'center',
    paddingHorizontal: 20,
    borderWidth: 1,
    borderRadius: 100
  },
  left_text: {
    fontSize: 36,
    color: "#18181B",
    fontWeight: "bold",
    textAlign: "right",
  },
  right_text: {
    fontSize: 36,
  }
});

export default SetTimeStyle;
