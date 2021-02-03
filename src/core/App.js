import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {MenuProvider} from 'react-native-popup-menu';

import ThemeProvider from './ThemeProvider';
import Pages from '../pages';

function App() {
  return (
    <ThemeProvider>
      <MenuProvider>
        <NavigationContainer>
          <Pages />
        </NavigationContainer>
      </MenuProvider>
    </ThemeProvider>
  );
}

export default App;
