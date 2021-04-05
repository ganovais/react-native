import React from 'react';
import {FlatList} from 'react-native';
import {
  Container,
  Header,
  HeaderText,
  HeaderImage,
  Categories,
  CategoryItem,
  CategoryItemText,
  Filmes,
  FilmeTitle,
  FilmeItem,
  FilmeImage,
  FilmeItemText,
  FilmeData,
} from './styled';

interface Category {
  id: number;
  title: string;
}

interface Filme {
  id: number;
  title: string;
  url: string;
  data: Date;
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

const filmes: Filme[] = [];

const Dashboard: React.FC = () => {
  const profileImage = require('../../assets/vader.jpeg');
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

      <Filmes>
        <FilmeTitle>Filmes</FilmeTitle>

        <FlatList
          data={filmes}
          renderItem={({item}) => (
            <FilmeItem>
              <FilmeImage source={{uri: item.url}} />
              <FilmeItemText>{item.title}</FilmeItemText>
              <FilmeData>{item.data}</FilmeData>
            </FilmeItem>
          )}
          keyExtractor={item => item.title}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />
      </Filmes>
    </Container>
  );
};

export default Dashboard;
