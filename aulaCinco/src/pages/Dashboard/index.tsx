import {useNavigation} from '@react-navigation/core';
import React, {useCallback, useState} from 'react';
import {FlatList} from 'react-native';
import Gadget from '../Gadget';
import {
  Container,
  Header,
  HeaderText,
  HeaderImage,
  Categories,
  CategoryItem,
  CategoryItemText,
  Gadgets,
  GadgetTitle,
  GadgetItem,
  GadgetItemText,
  GadgetToggle,
} from './styled';

interface Category {
  id: number;
  title: string;
}

interface Gadget {
  id: number;
  title: string;
  status: boolean;
}

const categories: Category[] = [
  {
    id: 1,
    title: 'Ação',
  },
  {
    id: 2,
    title: 'Aventura',
  },
  {
    id: 3,
    title: 'Comédia',
  },
  {
    id: 4,
    title: 'Romance',
  },
  {
    id: 5,
    title: 'Animação',
  },
];

const gadgets_db: Gadget[] = [
  {
    id: 1,
    title: 'Sala',
    status: false,
  },
  {
    id: 2,
    title: 'Cozinha',
    status: true,
  },
  {
    id: 3,
    title: 'Quarto',
    status: false,
  },
];

const Dashboard: React.FC = () => {
  const profileImage = require('../../assets/vader.jpeg');
  const [gadgets, setGadgets] = useState(gadgets_db);
  const {navigate} = useNavigation();

  const toggleSwitch = useCallback(
    (id: number) => {
      const index = gadgets.findIndex(gadget => gadget.id === id);
      const gadget = {...gadgets[index]};
      gadget.status = !gadget.status;
      const gadgets_ = [...gadgets];

      gadgets_[index] = gadget;

      setGadgets(gadgets_);
    },
    [gadgets],
  );
  return (
    <Container>
      <Header>
        <HeaderText>Gabriel Novais</HeaderText>
        <HeaderImage source={profileImage} />
      </Header>

      <Categories>
        <FlatList
          data={categories}
          renderItem={({item}) => (
            <CategoryItem>
              <CategoryItemText>{item.title}</CategoryItemText>
            </CategoryItem>
          )}
          keyExtractor={item => item.title}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />
      </Categories>

      <Gadgets>
        <GadgetTitle>Gadgets</GadgetTitle>

        <FlatList
          data={gadgets}
          renderItem={({item}) => (
            <GadgetItem>
              <GadgetItemText onPress={() => navigate('Gadget')}>
                {item.title}
              </GadgetItemText>
              <GadgetToggle
                trackColor={{false: '#767577', true: '#81b0ff'}}
                thumbColor={item.status ? '#f5dd4b' : '#f4f3f4'}
                ios_backgroundColor="#3e3e3e"
                onValueChange={() => toggleSwitch(item.id)}
                value={item.status}
              />
            </GadgetItem>
          )}
          keyExtractor={item => item.title}
          showsHorizontalScrollIndicator={false}
        />
      </Gadgets>
    </Container>
  );
};

export default Dashboard;
