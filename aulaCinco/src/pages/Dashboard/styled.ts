import styled from 'styled-components/native';
import {getStatusBarHeight} from 'react-native-iphone-x-helper';
import {Platform} from 'react-native';

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
  color: #edf2f4;
  font-size: 16px;
`;

export const HeaderImage = styled.Image`
  width: 80px;
  height: 80px;
  border-radius: 40px;
`;

export const Categories = styled.View`
  padding: 24px;
`;

export const CategoryItem = styled.View`
  align-items: center;
  justify-content: center;
  background-color: #d90429;
  padding: 10px;
  margin-right: 10px;
  border-radius: 15px;
`;

export const CategoryItemText = styled.Text`
  color: #f2e9e4;
  font-size: 16px;
`;

export const Gadgets = styled.SafeAreaView`
  background-color: #9a8c98;
  border-top-left-radius: 35px;
  border-top-right-radius: 35px;
  flex: 1;
  align-items: center;
  /* padding: 24px; */
`;
export const GadgetTitle = styled.Text`
  font-size: 34px;
  margin-top: 10px;
  color: #edf2f4;
`;
export const GadgetItem = styled.View`
  background-color: #22223b;
  padding: 16px;
  border-radius: 10px;
  box-shadow: 0 2px 2px #edf2f4;
  width: 300px;
  margin: 5px 0;
  flex-direction: row;
  justify-content: space-between;
`;
export const GadgetItemText = styled.Text`
  font-size: 16px;
  color: #edf2f4;
`;

export const GadgetToggle = styled.Switch``;
