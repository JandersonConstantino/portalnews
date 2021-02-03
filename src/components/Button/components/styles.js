import styled from '@emotion/native';

export const TouchableHighlight = styled.TouchableHighlight`
  background-color: ${({theme, disabled}) =>
    disabled ? theme.colors.fontLight : theme.colors.primaryDark};
  width: 80%;
  border-radius: 20px;
`;

export const Text = styled.Text`
  color: white;
  font-weight: bold;
  text-transform: uppercase;
  font-size: 16px;
  text-align: center;
  padding: 10px;
`;
