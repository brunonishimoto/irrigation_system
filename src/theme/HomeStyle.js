import { StyleSheet } from "react-native";

const HomeStyle = StyleSheet.create({
  container: {
    flex: 1,
  },
  body: (theme) => ({
    flex: 0.65,
    backgroundColor: theme.backgroundColor,
    justifyContent: "space-evenly"
  }),
});

export default HomeStyle;
