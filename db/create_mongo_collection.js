db.getSiblingDB("adopets").dropDatabase();
db = connect("localhost:27017/adopets");
db = db.createCollection( 'logger', {} )
