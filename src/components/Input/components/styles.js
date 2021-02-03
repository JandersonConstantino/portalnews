import styled from '@emotion/native';
import {TextInput as RNTextInput, Text as RNText} from 'react-native';

export const TextInput = styled(RNTextInput)`
  border-bottom-color: ${({theme}) => theme.colors.font};
  border-bottom-width: 1px;
  padding: 10px;
  width: 80%;
  text-align: center;
  margin-bottom: 10px;
`;

export const Text = styled(RNText)`
  font-weight: bold;
`;
