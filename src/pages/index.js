import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {useTranslation} from 'react-i18next';

import {PAGES} from '../constants';

import News from '../components/News/components';
import NewsDetail from '../components/NewsDetail/components';
import NewsForm from '../components/NewsForm/components';

import AddNewsHeaderButton from '../components/AddNewsHeaderButton/components';

const Stack = createStackNavigator();

const routes = [
  {
    name: PAGES.NEWS,
    component: News,
    options: {headerRight: () => <AddNewsHeaderButton />},
  },
  {name: PAGES.NEWS_DETAIL, component: NewsDetail},
  {name: PAGES.EDIT_NEWS, component: NewsForm},
  {name: PAGES.CREATE_NEWS, component: NewsForm},
];

function Pages() {
  const {t} = useTranslation();
  return (
    <Stack.Navigator initialRouteName={PAGES.NEWS}>
      {routes.map((route) => (
        <Stack.Screen
          key={route.name}
          name={route.name}
          component={route.component}
          options={{...(route.options || {}), title: t(route.name)}}
        />
      ))}
    </Stack.Navigator>
  );
}

export default Pages;
