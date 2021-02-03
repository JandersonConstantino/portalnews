import {useState, useEffect} from 'react';
import {Alert} from 'react-native';
import {useRoute, useNavigation} from '@react-navigation/native';
import {useTranslation} from 'react-i18next';
import RealmHOC from '../../../hocs/RealmHOC';
import {MODELS} from '../../../constants';

const defaultValues = {
  title: '',
  description: '',
  author: '',
};

const defaultErrors = {
  title: null,
  description: null,
  author: null,
};

function NewsFormContainer({children, realm, ...rest}) {
  const {params = {}} = useRoute();
  const {t} = useTranslation();
  const [values, setValues] = useState(defaultValues);
  const [errors, setErrors] = useState(defaultErrors);
  const [isUpdating, setIsUpdating] = useState(false);
  const navigation = useNavigation();

  const changeValue = (name, value) => {
    const updatedValues = {
      title: values.title,
      description: values.description,
      author: values.author,
      [name]: value,
    };
    setValues(updatedValues);
  };

  const onSubmit = () => {
    if (!validate()) {
      return;
    }

    const onConfirmAlert = () => {
      navigation.pop();
    };

    realm.write(() => {
      if (isUpdating) {
        const news = realm.objects(MODELS.NEWS)[0];
        news.title = values.title;
        news.description = values.description;
        news.author = values.author;
      } else {
        realm.create(MODELS.NEWS, {id: Date.now().toString(), ...values});
      }
    });

    Alert.alert(
      t('SUCCESS'),
      t(isUpdating ? 'UPDATED_WITH_SUCCESS' : 'CREATED_WITH_SUCCESS'),
      [
        {
          text: t('CONFIRM'),
          onPress: onConfirmAlert,
          style: 'default',
        },
      ],
    );
  };

  const onLoad = () => {
    let updatedValues = defaultValues;
    if (params.id) {
      const [item] = realm.objects(MODELS.NEWS).filtered(`id = "${params.id}"`);
      updatedValues = item;
      setIsUpdating(true);
    }
    setValues(updatedValues);
  };

  const validate = () => {
    let updatedErrors = {
      title: values.title.trim() !== '' ? '' : null,
      description: values.description.trim() !== '' ? '' : null,
      author: values.author.trim() !== '' ? '' : null,
    };

    setErrors(updatedErrors);

    return (
      !updatedErrors.title &&
      !updatedErrors.description &&
      !updatedErrors.author
    );
  };

  useEffect(onLoad, []);

  return children({
    values,
    changeValue,
    onSubmit,
    isUpdating,
    errors,
  });
}

export default RealmHOC(NewsFormContainer);
