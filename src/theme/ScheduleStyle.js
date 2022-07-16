import { StyleSheet } from "react-native";

const ScheduleStyle = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  leftInnerContainer: {
    margin: 5,
    flex: 1,
    alignItems: 'flex-start',
  },
  rightInnerContainer: {
    margin: 5,
    marginRight: 0,
    flex: 1,
    alignItems: 'flex-end',
  },
  descContainer: {
    flexDirection: 'row',
    color: 'grey',
  },
  clock: {
    color: 'gray',
    fontSize: 35,
    fontWeight: 'bold',
  },
  duration: {
    color: 'gray',
    fontSize: 15,
  },
  title: {
    fontSize: 10,
  },
  grey: {
    color: '#d0d5dc',
  },
  blue: {
    color: '#1992fe'
  }
});

export default ScheduleStyle;
