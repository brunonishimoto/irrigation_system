import React, {useContext, useEffect} from 'react';
import {Alert, View, TextInput} from 'react-native';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {getStatus, changeStatus} from '../../store/actions';
import {Text, Button, Header, OnOffButton, SideBySideText, SetTime} from '../../common';
import {NAVIGATION_TO_SETTINGS_SCREEN} from '../../navigation';
import {Status} from '../../api';
import {translate} from '../../i18n';
import {loadTheme} from '../../utils';
import {ThemeContext, lightTheme, darkTheme, HomeStyle, SideBySideTextStyle} from '../../theme';

const HomeScreen = ({
  apiStatus,
  errorMessage,
  status,
  getStatus: _getStatus,
  changeStatus: _changeStatus,
  /**
   * @source react-navigation
   */
  navigation,
}) => {
  const {theme, setTheme} = useContext(ThemeContext);

  useEffect(() => {
    // componentDidMount
    _getStatus();
    // loadTheme()
    //   .then((themeType) => {
    //     if (themeType) {
    //       setTheme(themeType === 'dark' ? darkTheme : lightTheme);
    //       // toggleDarkTheme(themeType === 'dark');
    //     }
    //   })
    //   .catch((error) => console.log(error));
  }, []);

  const onPress = () => {
    _changeStatus();
    const stringStatus = status ? "desligado" : "ligado";
    Alert.alert("Sistema de Irrigação " + stringStatus);
  }

  // const onChangeTime = (time) => {
  //   _changeStatus();
  //   const stringStatus = status ? "desligado" : "ligado";
  //   Alert.alert("Sistema de Irrigação " + stringStatus);
  // }



  return (
    <View style={HomeStyle.container}>
      <Header/>
      <View style={HomeStyle.body(theme)}>
      {/* <Text>{`${translate('homeScreen.apiCallStatus')} : ${apiStatus}`}</Text>
          {errorMessage !== '' && <Text>{errorMessage}</Text>} */}
        <SideBySideText status={status} />
        <View style={{alignItems: "center"}}>
          <OnOffButton status={status} onPress={onPress}/>
        </View>
        <SetTime value={'20'}/>
      </View>
      <Button
        title={translate('homeScreen.scheduleButton')}
        onPress={() => navigation.navigate(NAVIGATION_TO_SETTINGS_SCREEN)}
      />
    </View>
  );
};

HomeScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
  getStatus: PropTypes.func.isRequired,
  changeStatus: PropTypes.func.isRequired,
  apiStatus: PropTypes.oneOf(Object.values(Status)).isRequired,
  status: PropTypes.bool,
  errorMessage: PropTypes.string,
};

HomeScreen.defaultProps = {
  status: false,
  errorMessage: '',
};

const mapStateToProps = (home) => {
  const {apiStatus, errorMessage, status} = home.irrigation;
  return {
    apiStatus,
    errorMessage,
    status,
  };
};

export default connect(mapStateToProps, {getStatus, changeStatus})(HomeScreen);
