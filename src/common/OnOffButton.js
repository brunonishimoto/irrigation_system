import React from "react";
import { OnOffButtonStyle } from '../theme'
import { Text, TouchableOpacity } from "react-native";


const OnOffButton= ({ status, onPress }) => {
  return (
    <TouchableOpacity style={OnOffButtonStyle.button} onPress={onPress}>
      <Text style={OnOffButtonStyle.text}>
        {status ? "Desligar" : "Ligar"}
      </Text>
    </TouchableOpacity>
  );
};

export default OnOffButton;
