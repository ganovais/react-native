import {useNavigation} from '@react-navigation/core';
import React, {useState} from 'react';
import {StyleSheet, TextInput} from 'react-native';
import {
  Container,
  Header,
  HeaderText,
  GadgetContainer,
  GadgetTitle,
} from './styled';

interface InputProps {
  value: string;
}

const Gadget: React.FC = () => {
  const {navigate} = useNavigation();
  const [gadget, setGadget] = useState('Sala');

  return (
    <Container>
      <Header>
        <HeaderText onPress={() => navigate('Dashboard')}>voltar</HeaderText>
      </Header>
      <GadgetContainer>
        <GadgetTitle>{gadget}</GadgetTitle>
        <TextInput
          onChangeText={text => setGadget(text)}
          style={styles.input}
          placeholder="Nome"
        />
      </GadgetContainer>
    </Container>
  );
};

const styles = StyleSheet.create({
  input: {
    backgroundColor: '#ccc',
    padding: 10,
    borderRadius: 10,
    width: 300,
  },
});

export default Gadget;
