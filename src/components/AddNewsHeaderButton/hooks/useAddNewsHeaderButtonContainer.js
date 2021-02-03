import {useMemo, useCallback} from 'react';
import {useNavigation} from '@react-navigation/native';
import {PAGES} from '../../../constants';

function useAddNewsHeaderButtonContainer() {
  const navigation = useNavigation();

  const onPress = useCallback(() => {
    navigation.navigate(PAGES.CREATE_NEWS);
  }, [navigation]);

  return useMemo(() => ({onPress}), [onPress]);
}

export default useAddNewsHeaderButtonContainer;
