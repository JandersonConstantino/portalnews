import React, {forwardRef, useState, useEffect, useMemo} from 'react';
import Realm from 'realm';
import NewsSchema from '../models/News';

function RealmHOC(Component) {
  return forwardRef((props, ref) => {
    const [realm, setRealm] = useState(null);
    const {innerRef, ...others} = props;
    const realmIsOpen = useMemo(() => realm && !realm.isClosed, [realm]);

    const defineRealm = () => {
      !realmIsOpen &&
        Realm.open({schema: [NewsSchema]}).then((_realm) => {
          setRealm(_realm);
        });
    };

    useEffect(defineRealm, []);

    return !realm ? null : (
      <Component ref={innerRef || ref} {...others} realm={realm} />
    );
  });
}

export default RealmHOC;
