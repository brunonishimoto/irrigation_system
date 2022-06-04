import React from "react";
import { SetTimeStyle } from '../theme'
import {Text, View, TextInput } from "react-native";

const SetTime = ({ value }) => {
  return (
    <View style={SetTimeStyle.row}>
      <View>
        <TextInput style={SetTimeStyle.left_text} keyboardType="numeric" value={value}/>
      </View>
      <View>
        <Text style={SetTimeStyle.right_text}> Minutos</Text>
      </View>
    </View>
  );
};

export default SetTime;
