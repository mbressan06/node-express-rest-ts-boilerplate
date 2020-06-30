import { MONGODB_HOST, MONGODB_COLLECTION } from '../constants/mongo.constants';

const mongoConfig = {
  connectionString: MONGODB_HOST,
  collection: MONGODB_COLLECTION
};

export default mongoConfig;