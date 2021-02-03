import React from 'react';
import {useTranslation} from 'react-i18next';
import {Body, Image, Text} from './styles';

function EmptyStateNews() {
  const {t} = useTranslation();

  return (
    <Body>
      <Image source={require('../../../../assets/empty-state-news.png')} />
      <Text>{t('OOPS_WITHOUT_NEWS')}</Text>
    </Body>
  );
}

export default EmptyStateNews;
