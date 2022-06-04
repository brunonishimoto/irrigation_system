import { StyleSheet } from "react-native";

const SettingStyle = StyleSheet.create({
  container: (theme) => ({
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.backgroundColor,
  }),
  innerContainer: {
    width: '90%',
    // height: '100%',
    alignItems: 'center',
  }
});

export default SettingStyle;
