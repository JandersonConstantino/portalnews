import {memo, useMemo} from 'react';
import {Alert} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useTranslation} from 'react-i18next';

import RealmHOC from '../../../hocs/RealmHOC';
import {MAX_CHARS, MODELS, PAGES} from '../../../constants';

function CardNewsContainer({
  id,
  title,
  description,
  author,
  children,
  fetchNews,
  realm,
}) {
  const navigation = useNavigation();
  const {t} = useTranslation();
  const shortDescription = useMemo(() => {
    if (description.length > MAX_CHARS) {
      return `${description.substring(0, MAX_CHARS)}...`;
    }

    return description;
  }, [description]);

  const deleteNews = () => {
    realm.write(() => {
      const [item] = realm.objects(MODELS.NEWS).filtered(`id="${id}"`);
      item && realm.delete(item);
      fetchNews();
    });
  };

  const onPress = () => {
    navigation.navigate(PAGES.NEWS_DETAIL, {id});
  };

  const onPressEdit = () => {
    navigation.navigate(PAGES.EDIT_NEWS, {id});
  };

  const onPressDelete = () => {
    Alert.alert(
      t('DELETE_NEWS'),
      t('DO_YOU_REALLY_WANT_TO_DELETE_THIS_NEWS_?'),
      [
        {text: t('CANCEL'), style: 'cancel'},
        {text: t('CONFIRM'), onPress: deleteNews},
      ],
      {cancelable: true},
    );
  };

  return children({
    id,
    title,
    shortDescription,
    author,
    onPress,
    onPressEdit,
    onPressDelete,
  });
}

export default memo(RealmHOC(CardNewsContainer));
