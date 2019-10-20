import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;  
  padding: 30px;  
`;

export const Form = styled.View`    
  flex-direction: row;
  padding-bottom: 20px;
  border-bottom-width: 1px;
  border-color: #eee;  
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: '#999',  
})`    
  flex: 1;
  height: 40px;
  background: #eee;
  border-radius: 4px;
  padding: 0 15px;
  border: 1px solid #eee;  
`;

export const LogoHeader = styled.View`
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

export const InputPass = styled.TextInput.attrs({
  placeholderTextColor: '#999',
  secureTextEntry: true,
})`    
  flex: 1;
  height: 40px;
  background: #eee;
  border-radius: 4px;
  padding: 0 15px;
  border: 1px solid #eee;  
`;

export const RemoveButton = styled(RectButton)`  
  justify-content: center;
  align-items: center;
  background: #999;
  border-radius: 4px;
  padding: 0 20px;
`;

export const SubmitButton = styled(RectButton)`  
  justify-content: center;
  align-items: center;
  background: #ffcd02;
  border-radius: 4px;
  height: 40px;
  margin-top: 20px;
  padding: 0 20px;
`;

export const VersionContent = styled.View`
  justify-content: center;
  align-items: center;
  margin-top: 50;
`