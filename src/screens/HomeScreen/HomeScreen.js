import React, {useContext, useEffect, useState} from 'react';
import {Alert, View, TextInput} from 'react-native';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {getStatus, changeStatus} from '../../store/actions';
import {Text, Button, Header, OnOffButton, SideBySideText, Modal} from '../../common';
import Spinner from 'react-native-loading-spinner-overlay';
import {NAVIGATION_TO_SETTINGS_SCREEN} from '../../navigation';
import {api, Status} from '../../api';
import {translate} from '../../i18n';
import {loadTheme} from '../../utils';
import {ThemeContext, HomeStyle, SetTimeStyle, SpinnerStyle} from '../../theme';

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
  const [duration, setDuration] = useState('0');
  const [modalVisible, setModalVisible] = useState(true)

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
    setModalVisible(true)
    _changeStatus(duration);
    // const stringStatus = status ? "desligado" : "ligado";
    // Alert.alert("Sistema de Irrigação " + stringStatus);
  }

  const handleModal = () => {
    setModalVisible(false)
  }

  return (
    <View style={HomeStyle.container}>
      <Spinner
        //visibility of Overlay Loading Spinner
        visible={(apiStatus === Status.LOADING)}
        //Text with the Spinner
        textContent={'Loading...'}
        //Text style of the Spinner Text
        textStyle={SpinnerStyle.spinnerTextStyle}
      />
      <Modal isVisible={apiStatus === Status.ERROR && modalVisible}>
        <Modal.Container>
          <Modal.Header title="Erro de Conexão" />
          <Modal.Body>
            <Text>Não foi possível se conectar com o dispositivo</Text>
            </Modal.Body>
          <Modal.Footer>
            <Button title="OK" onPress={handleModal} />
          </Modal.Footer>
        </Modal.Container>
      </Modal>
      <Header/>
      <View style={HomeStyle.body(theme)}>
        <SideBySideText status={status} />
        <View style={{alignItems: "center"}}>
          <OnOffButton status={status} onPress={onPress}/>
        </View>
        <View style={SetTimeStyle.row}>
          <View>
            <TextInput style={SetTimeStyle.left_text} keyboardType="numeric" defaultValue={(duration === '0' || duration === '') ? '': duration.toString()}
            onChangeText={text => setDuration(text)}/>
          </View>
          <View>
            <Text style={SetTimeStyle.right_text}> {(duration === '0' || duration === '') ? 'Adicionar Duração': 'Minutos'}</Text>
          </View>
        </View>
        {/* <View><Text>{apiStatus}</Text></View> */}
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
