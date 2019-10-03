import React from 'react';
import { Text, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'
import Logo from './../../images/logo.jpg';

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
      <SubmitButton onPress={() => navigation.replace("Home")}>
        <Text style={{ color: "#fff"}}>Login</Text>
      </SubmitButton>
      <VersionContent>
        <Text>V1.0</Text>
      </VersionContent>
    </Container>    
  );
}

login.navigationOptions = {
  title: '',
}
