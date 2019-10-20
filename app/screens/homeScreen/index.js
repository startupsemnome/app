import React from 'react';
import { View, Text, Image, TouchableHighlight } from 'react-native';

import { Container } from './styles';
import Tabs from "../../components/tabs"
import Chart from "../../components/chart"

export default function home({navigation}) {
  return (
    <Container>
      <View style={{flex: 1, backgroundColor: "#eeeeee", marginBottom: 20}}>
        <Chart />
      </View>
      <View style={{ backgroundColor: "#1c1c39", justifyContent: "center", padding: 20, width: "105%", left: -10 }}>
        <View style={{ justifyContent: "flex-start", alignItems: "center", paddingBottom: 15, flexDirection: "row"}}>
          <Image source={require('./../../static/up.png')} style={{ marginRight: 10, height: 30, width: 30 }} />
          <Text style={{color: "#fff",fontSize: 20}}>3 Novos Projetos</Text>
        </View>
        <View style={{ justifyContent: "flex-start", alignItems: "center", flexDirection: "row"}}>
          <Image source={require('./../../static/down.png')} style={{ marginRight: 10, height: 27, width: 27 }} />
          <Text style={{color: "#fff",fontSize: 20}}>3 Recursos Sairam dos projetos</Text>
        </View>        
      </View>
      <Tabs navigation={navigation} />
    </Container>
  );
}

home.navigationOptions = {
  title: 'Página Inicial',
  textAlign: 'center'
}