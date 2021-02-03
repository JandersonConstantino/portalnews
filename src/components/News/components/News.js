import React from 'react';

import NewsContainer from '../containers/NewsContainer';
import CardNews from './CardNews';
import EmptyStateNews from './EmptyStateNews';
import {Body, ScrollView} from './styles';

function News() {
  return (
    <NewsContainer>
      {({news, isEmpty, fetchNews}) =>
        isEmpty ? (
          <EmptyStateNews />
        ) : (
          <Body>
            <ScrollView>
              {news.map(({id, title, description, author}) => (
                <CardNews
                  key={id}
                  {...{id, title, description, author, fetchNews}}
                />
              ))}
            </ScrollView>
          </Body>
        )
      }
    </NewsContainer>
  );
}

export default News;
