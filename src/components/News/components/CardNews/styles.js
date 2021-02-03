import styled from '@emotion/native';
import {Menu as PopMenu} from 'react-native-popup-menu';
import {Image as RNImage} from 'react-native';

export const Container = styled.TouchableHighlight`
  border-radius: 20px;
  margin: 20px;
  margin-bottom: 0px;
`;

export const Card = styled.View`
  border: 2px solid ${({theme}) => theme.colors.backgroundDark};
  padding: 20px;
  border-radius: 10px;
  min-height: 160px;
`;

export const Title = styled.Text`
  font-size: ${({theme}) => theme.sizes.extraLarge};
  margin-bottom: 10px;
  color: ${({theme}) => theme.colors.fontDark};
  font-weight: bold;
`;

export const Description = styled.Text`
  font-size: ${({theme}) => theme.sizes.medium};
  color: ${({theme}) => theme.colors.font};
`;

export const Author = styled.Text`
  font-size: ${({theme}) => theme.sizes.large};
  text-align: right;
`;

export const Flex = styled.View`
  flex-direction: row;
  margin-top: 10px;
  justify-content: flex-end;
`;

export const Menu = styled(PopMenu)`
  margin-left: 10px;
  font-size: ${({theme}) => theme.sizes.large};
`;

export const Image = styled(RNImage)`
  margin-top: 3px;
  width: 10px;
  height: 15px;
`;
