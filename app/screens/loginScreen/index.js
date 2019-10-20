import React from 'react';
import { Text, Image, View, TouchableHighlight } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'
import Logo from './../../static/logo.jpg';

import { Container, Form, Input, RemoveButton, SubmitButton, VersionContent, InputPass, LogoHeader } from './styles';

export default function login({navigation}) {
  return (
    <Container>
      <LogoHeader>
        <Image source={Logo} width={20} height={20} />
        <Text>Resource Manager</Text>
        <Text>Painel Administrativo</Text>
      </LogoHeader>            
      <Form>        
        <Input
          autoCorrect={false}
          autoCapitalize="none"          
          placeholder="Digite seu email"
        />        
        <RemoveButton>
          <Text style={{ color: "#fff"}}>X</Text>
        </RemoveButton>                
      </Form>      
      <Form>
      <InputPass
          autoCorrect={false}
          autoCapitalize="none"          
          placeholder="Digite sua senha"
        />
        <RemoveButton>
          <Text style={{ color: "#fff"}}>X</Text>
        </RemoveButton>   
      </Form>
      <TouchableHighlight style={{         
          backgroundColor: "#ffcd02",
          borderRadius: 4,
          height: 40,
          marginTop: 20,
          paddingTop: 20
        }} 
        onPress={() => navigation.replace("HomeScreen")}>
          <View style={{
              justifyContent: "center",
              alignItems: "center",
          }}>

        <Text style={{ color: "#eee", marginBottom: 50}}>Login</Text>
          </View>
      </TouchableHighlight>
      <VersionContent>
        <Text>V1.0</Text>
      </VersionContent>
    </Container>    
  );
}

login.navigationOptions = {
  title: '',
}