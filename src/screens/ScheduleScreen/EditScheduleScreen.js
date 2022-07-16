import React, { useEffect, useState } from 'react';
import {connect} from 'react-redux';
import { StyleSheet, View, Alert, TextInput, Text } from 'react-native';
import { TimePicker, ScheduleButton } from '../../common';
import {addSchedule, updateSchedule, deleteSchedule} from '../../store/actions';
import { ScheduleStyle, SetTimeStyle } from '../../theme';

const EditScheduleScreen = ({
  apiStatus,
  errorMessage,
  addSchedule: _addSchedule,
  updateSchedule: _updateSchedule,
  deleteSchedule: _deleteSchedule,
  route,
  navigation,
}) => {
  const [schedule, setSchedule] = useState(null);
  const [mode, setMode] = useState(null);
  const [duration, setDuration] = useState(15)

  useEffect(() => {
    if (route.params && route.params.schedule.uid) {
      setSchedule(route.params.schedule)
      // Alert.alert('Edit Mode');
      setMode('EDIT');
    } else {
      // Alert.alert('Create Mode');
      setSchedule(route.params.schedule)
      setMode('CREATE');
      console.log(mode)
    }
  }, []);

  function update (updates) {
    const a = Object.assign({}, schedule);
    for (let u of updates) {
      a[u[0]] = u[1];
    }
    setSchedule(a);
  }

  function onSave () {
    if (mode === 'EDIT') {
      // schedule.active = true;
      _updateSchedule(schedule.uid, {"active": schedule.active, "hour": schedule.hour, "minute": schedule.minute, "duration": parseInt(duration)});
    }
    if (mode === 'CREATE') {
      _addSchedule(schedule.hour, schedule.minute, parseInt(duration));
    }
    navigation.goBack();
  }

  async function onDelete () {
    Alert.alert('Horário deletado');
    _deleteSchedule(schedule.uid)
    navigation.goBack();
  }

  if (!schedule) {
    return <View/>;
  }

  return (
    <View style={styles.container}>
      <View style={[styles.innerContainer, styles.container]}>
        <View styles={styles.inputsContainer}>
          <TimePicker
            onChange={(h, m) => update([['hour', h], ['minute', m]])}
            hour={schedule.hour}
            minutes={schedule.minute}
          />
        </View>
        <View style={SetTimeStyle.row}>
          <View>
            <TextInput style={SetTimeStyle.left_text} keyboardType="numeric" defaultValue={(duration === null) ? '': duration.toString()}
            onChangeText={text => setDuration(text)}/>
          </View>
          <View>
            <Text style={SetTimeStyle.right_text}> Minutos</Text>
          </View>
        </View>
        <View style={styles.buttonContainer}>
          {mode === 'EDIT' && (
            <ScheduleButton
              onPress={onDelete}
              title={'Delete'}
            />
          )}
          <ScheduleButton
            fill={true}
            onPress={onSave}
            title={'Save'}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-around',
    alignItems: 'center',
    height: '100%',
  },
  inputsContainer: {
    width: '100%',
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});

const mapStateToProps = (setting) => {
  const {apiStatus, errorMessage, schedule} = setting.schedule;
  return {
    apiStatus,
    errorMessage,
    schedule,
  };
};

export default connect(mapStateToProps, {addSchedule, updateSchedule, deleteSchedule})(EditScheduleScreen);
