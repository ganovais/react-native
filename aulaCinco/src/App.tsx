import React from 'react';
import {StatusBar, StyleSheet, View} from 'react-native';
import Dashboard from './pages/Dashboard';

const App: React.FC = () => {
  return (
    <View style={styles.principal}>
      <StatusBar barStyle="light-content" />
      <Dashboard />
    </View>
  );
};

const styles = StyleSheet.create({
  principal: {
    flex: 1,
    backgroundColor: '#4a4e69',
  },
});

export default App;
