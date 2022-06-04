import React from "react";
import { HeaderStyle } from '../theme'
import {ImageBackground, Text, View } from "react-native";

const irrigation_image = require("../assets/images/irrigation.jpg");

const Header = () => {
  return (
    <ImageBackground source={irrigation_image} resizeMode="cover" style={HeaderStyle.image}>
      <Text style={HeaderStyle.text}>Sistema{"\n"}de{"\n"}Irrigação</Text>
    </ImageBackground>
  );
};

export default Header;
