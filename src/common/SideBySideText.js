import React from "react";
import { SideBySideTextStyle } from '../theme'
import {Text, View } from "react-native";

const SideBySideText = ({ status }) => {
  return (
    <View style={SideBySideTextStyle.row}>
      <View>
        <Text style={SideBySideTextStyle.left_text}>Status:</Text>
      </View>
      <View>
        <Text style={[SideBySideTextStyle.right_text, status ? SideBySideTextStyle.text_color_on : SideBySideTextStyle.text_color_off]}>{status ? "Ligado" : "Desligado"}</Text>
      </View>
    </View>
  );
};

export default SideBySideText;
