import React, {memo} from 'react';
import PropTypes from 'prop-types';
import {useTheme} from '@emotion/react';
import {useTranslation} from 'react-i18next';
import {MenuOptions, MenuOption, MenuTrigger} from 'react-native-popup-menu';

import {
  Container,
  Card,
  Title,
  Description,
  Author,
  Flex,
  Menu,
  Image,
} from './styles';
import CardNewsContainer from '../../containers/CardNewsContainer';

function CardNews(props) {
  const theme = useTheme();
  const {t} = useTranslation();

  return (
    <CardNewsContainer {...props}>
      {({
        id,
        title,
        shortDescription,
        author,
        onPress,
        onPressEdit,
        onPressDelete,
      }) => (
        <Container
          onPress={onPress}
          testID={`container-card-${id}`}
          underlayColor={theme.colors.backgroundDark}>
          <Card>
            <Title>{title}</Title>
            <Description>{shortDescription}</Description>
            <Flex>
              <Author>{author}</Author>
              <Menu>
                <MenuTrigger>
                  <Image source={require('../../../../assets/3dots.png')} />
                </MenuTrigger>
                <MenuOptions>
                  <MenuOption onSelect={onPressEdit} text={t('EDIT')} />
                  <MenuOption onSelect={onPressDelete} text={t('DELETE')} />
                </MenuOptions>
              </Menu>
            </Flex>
          </Card>
        </Container>
      )}
    </CardNewsContainer>
  );
}

CardNews.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default memo(CardNews);
