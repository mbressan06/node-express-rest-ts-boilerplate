// conn = new Mongo('mongodb://localhost:27017/adopets');  
db = connect("localhost:27017/adopets");
db = db.createCollection( 'logger', {} )
