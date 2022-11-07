import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Nav } from './src/navigate/Nav';


const App = () => {
  return (
    <NavigationContainer>
      <Nav></Nav>
    </NavigationContainer>
  );
};

export default App;
