import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {
  View,
  StyleSheet,
  Text
} from 'react-native';

import Tabs from './src/screens/Navigation/navigation';
import Store from './src/context/store';
import AddShoppingList from './src/screens/AddShoppingList';

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

const App = () => {
  return (
    <View style={styles.container}>
      <Store>
        <NavigationContainer>
          <Tabs></Tabs>
        </NavigationContainer>
        <AddShoppingList />
      </Store>
    </View>
  
  );
};

export default App;
