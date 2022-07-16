

import React from 'react';
import { Switch, Text, TouchableOpacity, View } from 'react-native';
import { ScheduleStyle } from '../theme';


const Schedule = ({ uid, hour, minutes, duration, onPress, isActive, onChange }) => {
  return (
    <TouchableOpacity
      onPress={() => onPress(uid)}
      style={ScheduleStyle.container}
    >
      <View style={ScheduleStyle.leftInnerContainer}>
        <View style={ScheduleStyle.leftInnerContainer}>
          <Text style={ScheduleStyle.clock}>
            {hour < 10 ? '0' + hour : hour}:{minutes < 10 ? '0' + minutes : minutes}
          </Text>
        </View>
        <View style={ScheduleStyle.leftInnerContainer}>
          <Text style={ScheduleStyle.duration}>
            ({duration} minutos)
          </Text>
        </View>
      </View>
      <View style={ScheduleStyle.rightInnerContainer}>
        <Switch
          ios_backgroundColor={'black'}
          trackColor={{ false: ScheduleStyle.grey, true: ScheduleStyle.blue }}
          value={isActive}
          onValueChange={onChange}/>
      </View>
    </TouchableOpacity>
  );
};

export default Schedule;
