import {useRoute} from '@react-navigation/native';
import {useState, useEffect} from 'react';
import {MODELS} from '../../../constants';
import RealmHOC from '../../../hocs/RealmHOC';

const defaultState = {
  id: '',
  title: '',
  description: '',
  author: '',
};

function NewsDetailContainer({children, realm}) {
  const [values, setValues] = useState(defaultState);
  const {params} = useRoute();

  const onLoad = () => {
    if (params.id) {
      const news = realm.objects(MODELS.NEWS).filtered(`id="${params.id}"`)[0];
      setValues({
        id: params.id,
        title: news.title,
        description: news.description,
        author: news.author,
      });
    }
  };

  useEffect(onLoad, []);

  return children(values);
}

export default RealmHOC(NewsDetailContainer);
