import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import Button from './components/Button'; 

const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
    {
        id: 'bds7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'First Item',
      },
      {
        id: '3ac6s8afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Second Item',
      },
      {
        id: '58694sa0f-3da1-471f-bd96-145571e29d72',
        title: 'Third Item',
      },
      {
        id: 'bds76acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'First Item',
      },
      {
        id: '3ac6s68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Second Item',
      },
      {
        id: '58694s5a0f-3da1-471f-bd96-145571e29d72',
        title: 'Third Item',
      },

];

const App: React.FC = () => {
    const logIn = () => {
        console.log('LogIn')
    }

    const logOut = () => {
        console.log('LogOut')
    }
    return (
        <>
            <View style={{backgroundColor: '#ccc', flex: 1}}>
                <Text style={styles.texto}>Hello World!</Text>

                <Button title="Entrar" funcao={logIn}/>
                <Button title="Sair" funcao={logOut}/>
            </View>

            <View style={{backgroundColor: '#ff9000', flex: 3}}>
                <Text>Minha Lista</Text>

                <FlatList 
                    data={DATA} 
                    renderItem={({item}) => <Text>{item.title}</Text>}
                    keyExtractor={item => item.id}
                    horizontal={false}
                />
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    texto: {
        fontSize: 25,
        color: '#ff9000'
    }
})

export default App;