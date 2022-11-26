import React, {useContext, useState, useEffect} from 'react';
import {ScrollView, StyleSheet, View, Switch, TouchableOpacity, Alert} from 'react-native';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {Text, Schedule, AddButton} from '../../common';
import {Status} from '../../api';
import {getSchedule, addSchedule, updateSchedule} from '../../store/actions';
import {ThemeContext, SettingStyle} from '../../theme';
import {NAVIGATION_TO_EDIT_SCHEDULE_SCREEN} from '../../navigation';
import {getCurrentTime, sortTime, formatNumber} from '../../utils';

const ScheduleScreen = ({
  apiStatus,
  errorMessage,
  schedule,
  getSchedule: _getSchedule,
  addSchedule: _addSchedule,
  updateSchedule: _updateSchedule,
  navigation,
}) => {
  const [isDarkTheme, toggleDarkTheme] = useState(false);
  const {theme, setTheme} = useContext(ThemeContext);

  useEffect(() => {
    // componentDidMount
    _getSchedule();
    // loadTheme()
    //   .then((themeType) => {
    //     if (themeType) {
    //       toggleDarkTheme(themeType === 'dark');
    //     }
    //   })
    //   .catch((error) => console.log(error));
  }, []);

  // const toggleSwitch = (state) => {
  //   toggleDarkTheme(state);
  //   setTheme(state ? darkTheme : lightTheme); // Change theme globally
  //   saveTheme(state ? 'dark' : 'light'); // Save theme preference in Async Storage
  // };


  return (
    <View style={styles.container(theme)}>
    {/* <View style={styles.switchContainer}>
        <Text>{translate('settingsScreen.darkMode')}</Text>
        <Switch onValueChange={toggleSwitch} value={isDarkTheme} />
        <Text>{`${translate('homeScreen.apiCallStatus')} : ${apiStatus}`}</Text>
          {errorMessage !== '' && <Text>{errorMessage}</Text>}
    </View> */}
    <ScrollView style={styles.container(theme)}>
      <View style={SettingStyle.container}>
        <View style={SettingStyle.innerContainer}>
          {schedule && schedule.length === 0 && (
            <Text>Nenhum horário</Text>
          )}
          {schedule && sortTime(schedule).filter(a => !isNaN(a.uid)).map(a => (
            <Schedule
              key={a.uid}
              uid={a.uid}
              onChange={active => {
                _updateSchedule(a.uid, {"active": active});
                if (active) Alert.alert(`Agendamento no horario ${formatNumber(a.hour)}:${formatNumber(a.minute)} ligado`);
                else Alert.alert(`Agendamento no horario ${formatNumber(a.hour)}:${formatNumber(a.minute)} desligado`);
              }}
              onPress={() => navigation.navigate(NAVIGATION_TO_EDIT_SCHEDULE_SCREEN, { "schedule": a })}
              hour={a.hour}
              minutes={a.minute}
              duration={a.duration}
              isActive={a.active}
            />
          ))}
        </View>
      </View>
    </ScrollView>
    <AddButton onPress={() => navigation.navigate(NAVIGATION_TO_EDIT_SCHEDULE_SCREEN,  { "schedule": getCurrentTime()})} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: (theme) => ({
    backgroundColor: theme.backgroundColor,
    flex: 1
  }),
  switchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

ScheduleScreen.propTypes = {
  getSchedule: PropTypes.func.isRequired,
  addSchedule: PropTypes.func.isRequired,
  updateSchedule: PropTypes.func.isRequired,
  apiStatus: PropTypes.oneOf(Object.values(Status)).isRequired,
  status: PropTypes.bool,
  errorMessage: PropTypes.string,
};

ScheduleScreen.defaultProps = {
  schedule: [],
  errorMessage: '',
};

const mapStateToProps = (setting) => {
  const {apiStatus, errorMessage, schedule} = setting.schedule;
  // schedule = sortTime(schedule);
  return {
    apiStatus,
    errorMessage,
    schedule,
  };
};

export default connect(mapStateToProps, {getSchedule, addSchedule, updateSchedule})(ScheduleScreen);
