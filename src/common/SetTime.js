import React, {useState} from "react";
import { SetTimeStyle } from '../theme'
import {Text, View, TextInput } from "react-native";
import { setContext } from "redux-saga/effects";

const SetTime = ({ value, onChangeText }) => {

  return (
    <View style={SetTimeStyle.row}>
      <View>
        <TextInput style={SetTimeStyle.left_text} keyboardType="numeric" defaultValue={(value === undefined) ? '': value.toString()}
        onChangeText={onChangeText}/>
      </View>
      <View>
        <Text style={SetTimeStyle.right_text}> Minutos</Text>
      </View>
    </View>
  );
};

export default SetTime;
