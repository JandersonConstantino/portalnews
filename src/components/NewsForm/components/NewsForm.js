import React from 'react';
import NewsFormContainer from '../containers/NewsFormContainer';
import {useTranslation} from 'react-i18next';
import {Container, ContainerButton} from './styles';

import Input from '../../Input/components';
import Button from '../../Button/components';

function NewsForm(props) {
  const {t} = useTranslation();

  return (
    <NewsFormContainer {...props}>
      {({values, changeValue, onSubmit, isUpdating}) => (
        <Container>
          <Input
            label={t('TITLE')}
            inputProps={{
              placeholder: t('TITLE'),
              value: values.title,
              onChangeText: (title) => changeValue('title', title),
            }}
          />

          <Input
            label={t('DESCRIPTION')}
            inputProps={{
              placeholder: t('DESCRIPTION'),
              value: values.description,
              multiline: true,
              numberOfLines: 4,
              onChangeText: (description) =>
                changeValue('description', description),
            }}
          />

          <Input
            label={t('AUTHOR')}
            inputProps={{
              placeholder: t('AUTHOR'),
              value: values.author,
              onChangeText: (author) => changeValue('author', author),
            }}
          />

          <ContainerButton>
            <Button
              onPress={onSubmit}
              text={t(isUpdating ? 'UPDATE' : 'SAVE')}
            />
          </ContainerButton>
        </Container>
      )}
    </NewsFormContainer>
  );
}

export default NewsForm;
