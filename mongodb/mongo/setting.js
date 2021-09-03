// create a database and collection
db.getSiblingDB('Test').createCollection("delete_me");  

// test and create a user.
db.getSiblingDB('admin').createUser(  
    {
        user: "Test",
        pwd: "1qaz2wsx123",
        roles: [
            { role: "readWrite", db: "Test"}
        ]
    }
);