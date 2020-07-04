db.getSiblingDB(process.env.MONGODB_URI || 'adopets').dropDatabase();
db = connect(process.env.MONGODB_URI || 'localhost:27017/adopets');
db = db.createCollection( process.env.MONGO_COL || 'logger', {} )
