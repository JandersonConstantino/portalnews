import React from 'react';
import {ThemeProvider as EmotionThemeProvider} from '@emotion/react';
import {MenuProvider} from 'react-native-popup-menu';

import defaultTheme from '../src/theme/default';

function MockProvider({children}) {
  return (
    <MenuProvider>
      <EmotionThemeProvider theme={defaultTheme}>
        {children}
      </EmotionThemeProvider>
    </MenuProvider>
  );
}

export default MockProvider;
