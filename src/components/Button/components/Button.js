import React from 'react';
import {useTheme} from '@emotion/react';
import * as Styled from './styles';

function Button({text, onPress, disabled}) {
  const theme = useTheme();

  return (
    <Styled.TouchableHighlight
      underlayColor={theme.colors.primaryDarker}
      onPress={onPress}
      disabled={disabled}>
      <Styled.Text>{text}</Styled.Text>
    </Styled.TouchableHighlight>
  );
}

export default Button;
