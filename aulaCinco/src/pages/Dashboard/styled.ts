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

export const Filmes = styled.View``;
export const FilmeTitle = styled.Text``;
export const FilmeItem = styled.View``;
export const FilmeImage = styled.Image``;
export const FilmeItemText = styled.Text``;
export const FilmeData = styled.Text``;
