import {normalize, schema} from 'normalizr';

// Define book items entity
const items = new schema.Entity(
  'items',
  {},
  {
    idAttribute: 'book_id',
    processStrategy: item =>
      Object.assign({}),
  },
);

export default data =>
  normalize(data, {
    allItems: new schema.Array(items),
  });
