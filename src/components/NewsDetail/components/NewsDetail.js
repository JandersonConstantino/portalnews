import React from 'react';
import {useTranslation} from 'react-i18next';

import NewsDetailContainer from '../containers/NewsDetailContainer';
import {Container, Title, Description, Author, ScrollView} from './styles';

function NewsDetail(props) {
  const {t} = useTranslation();

  return (
    <NewsDetailContainer {...props}>
      {({title, description, author}) => (
        <ScrollView>
          <Container>
            <Title>{title}</Title>
            <Description>{description}</Description>
            <Author>
              {t('AUTHOR')}: {author}
            </Author>
          </Container>
        </ScrollView>
      )}
    </NewsDetailContainer>
  );
}

export default NewsDetail;
