import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {StatusBar, StyleSheet, View} from 'react-native';
import AppRoutes from './routes';

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <View style={styles.principal}>
        <StatusBar barStyle="light-content" />
        <AppRoutes />
      </View>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  principal: {
    flex: 1,
    backgroundColor: '#4a4e69',
  },
});

export default App;
