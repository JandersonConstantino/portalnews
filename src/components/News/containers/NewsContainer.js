import {useState, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import RealmHOC from '../../../hocs/RealmHOC';
import {MODELS} from '../../../constants';

function NewsContainer({children, realm}) {
  const navigation = useNavigation();
  const [news, setNews] = useState([]);
  const [isEmpty, setIsEmpty] = useState(false);

  const fetchNews = () => {
    const updatedNews = realm.objects(MODELS.NEWS).sorted('id');
    setNews(updatedNews);
    setIsEmpty(updatedNews.length === 0);
  };

  const defineNavigationSubscriber = () => {
    fetchNews();
    const unsubscribe = navigation.addListener('focus', fetchNews);

    return unsubscribe;
  };

  useEffect(defineNavigationSubscriber, []);

  return children({news, isEmpty, fetchNews});
}

export default RealmHOC(NewsContainer);
