import React from 'react';
import { View, Text, TouchableHighlight } from 'react-native';

import { Container } from './styles';

export default function home({navigation}) {
  return (
    <Container>
      <TouchableHighlight onPress={() => navigation.navigate('Login')}>
        <Text>
          Teste
        </Text>
      </TouchableHighlight>
    </Container>
  );
}

home.navigationOptions = {
  title: 'Home',
  textAlign: 'center'
}
