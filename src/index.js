import React, { Component } from 'react';
import { StatusBar } from 'react-native'
import Routes from './routes'
import CodePush from 'react-native-code-push'
import OneSignal from 'react-native-onesignal'

class App extends Component {
  constructor(props){
    super(props);

    OneSignal.init('9e6e002e-5ec4-4f31-b2e1-a629915d398f');
    OneSignal.addEventListener('received', this.onReceived)
    OneSignal.addEventListener('opened', this.onOpened)
    OneSignal.addEventListener('ids', this.onIds)
  }

  componentWillUnmount() {
    OneSignal.addEventListener('received', this.onReceived)
    OneSignal.addEventListener('opened', this.onOpened)
    OneSignal.addEventListener('ids', this.onIds)
  }

  onReceived = (data) => {

  };

  onOpened = (notification) => {

  };

  onIds = (id) => {

  };

  render() {
    return (
      <>
      <StatusBar barStyle='light-content' backgroundColor='#ffcd02' />
      <Routes />
      </>
    );
  }
}

export default CodePush({
  checkFrequency: CodePush.CheckFrequency.ON_APP_RESUME,
})(App);
