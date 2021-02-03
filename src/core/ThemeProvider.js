import React from 'react';
import {ThemeProvider as EmotionThemeProvider} from '@emotion/react';

import defaultTheme from '../theme/default';

function ThemeProvider({children}) {
  return (
    <EmotionThemeProvider theme={defaultTheme}>{children}</EmotionThemeProvider>
  );
}

export default ThemeProvider;
