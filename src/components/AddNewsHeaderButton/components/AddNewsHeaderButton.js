import React from 'react';
import {useTheme} from '@emotion/react';

import {Image, Body, TouchHighlight} from './styles';
import useAddNewsHeaderButtonContainer from '../hooks/useAddNewsHeaderButtonContainer';

function AddNewsHeaderButton() {
  const theme = useTheme();
  const {onPress} = useAddNewsHeaderButtonContainer();

  return (
    <Body>
      <TouchHighlight
        onPress={onPress}
        underlayColor={theme.colors.backgroundDarker}>
        <Image source={require('../../../assets/plus.png')} />
      </TouchHighlight>
    </Body>
  );
}

export default AddNewsHeaderButton;
