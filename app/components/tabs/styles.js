
import { Animated } from "react-native";
import styled from "styled-components/native";

export const Container = styled(Animated.View)`
  height: 150px;
  margin-top: 50px;
`;

export const TabsContainer = styled.ScrollView.attrs({
  horizontal: true,
  contentContainerStyle: { paddingLeft: 10, paddingRight: 20 },
  showsHorizontalScrollIndicator: false
})``;

export const TabItem = styled.View`
  width: 110px;
  height: 110px;
  background: #fecc04;
  border-radius: 14px;
  margin-left: 20px;
  padding: 10px;
  justify-content: space-around;
`;

export const TabText = styled.Text`
  font-size: 14px;
  padding: 10px;
  color: #fff;
`;