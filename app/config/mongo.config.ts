import { MONGODB_HOST, MONGODB_USER, MONGODB_PASSWORD, MONGODB_COLLECTION } from '../constants/mongo.constants';

const mongoConfig = {
  connectionString: MONGODB_HOST,
// user: MONGODB_USER,
// pass: MONGODB_PASSWORD,
  collection: MONGODB_COLLECTION
};

export default mongoConfig;