import React from "react";
import { StyleSheet, TouchableOpacity, Image } from "react-native";

const button_icon = require("../assets/images/button.png");


const AddButton= ({ onPress }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={onPress}
      style={styles.touchableOpacityStyle}>
      <Image
        //We are making FAB using TouchableOpacity with an image
        //We are using online image here
        source={button_icon}
        //You can use you project image Example below
        //source={require('./images/float-add-icon.png')}
        style={styles.floatingButtonStyle}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  touchableOpacityStyle: {
    position: 'absolute',
    width: 75,
    height: 75,
    alignSelf: 'center',
    bottom: 15,
  },
  floatingButtonStyle: {
    resizeMode: 'contain',
    justifyContent: 'center',
    width: 75,
    height: 75,
    //backgroundColor:'black'
  },
});

export default AddButton;
