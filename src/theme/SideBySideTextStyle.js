import { StyleSheet } from "react-native";

const SideBySideTextStyle = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "center"
  },
  left_text: {
    justifyContent: "flex-start",
    fontSize: 36,
    color: "#18181B",
    fontWeight: "bold"
  },
  right_text: {
    justifyContent: "flex-end",
    fontSize: 36
  },
  text_color_on: {
    color: "#02BE6E",
  },
  text_color_off: {
    color: "#FF0800",
  }
});

export default SideBySideTextStyle;
