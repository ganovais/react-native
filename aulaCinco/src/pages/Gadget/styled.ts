import {Platform} from 'react-native';
import {getStatusBarHeight} from 'react-native-iphone-x-helper';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;
export const Header = styled.View`
  background-color: #161b22;
  padding: 24px;
  padding-top: ${Platform.OS === 'ios' ? getStatusBarHeight() + 24 : 24}px;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
`;
export const HeaderText = styled.Text`
  color: #ccc;
`;
export const GadgetContainer = styled.View`
  margin-top: 30px;
  background-color: #9a8c98;
  border-top-left-radius: 35px;
  border-top-right-radius: 35px;
  align-items: center;
  flex: 1;
  padding: 24px;
`;
export const GadgetTitle = styled.Text`
  font-size: 30px;
`;
