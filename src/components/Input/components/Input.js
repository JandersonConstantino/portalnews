import React from 'react';
import {useTheme} from '@emotion/react';
import {TextInput, Text} from './styles';

function Input({label, inputProps}) {
  const theme = useTheme();

  return (
    <>
      {label && <Text>{label}</Text>}
      <TextInput
        placeholderTextColor={theme.colors.fontLight}
        {...inputProps}
      />
    </>
  );
}

export default Input;
