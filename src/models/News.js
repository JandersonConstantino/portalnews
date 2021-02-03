import {MODELS} from '../constants';

const NewSchemas = {
  name: MODELS.NEWS,
  primaryKey: 'id',
  properties: {
    id: 'string',
    title: 'string',
    description: 'string',
    author: 'string',
  },
};

export default NewSchemas;
