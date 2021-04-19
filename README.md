# graphql-react-mongo

This repo show you the simply way to **create articles and show them** in ReactJS views through the powerful Query Language GraphQL and store data in MongoDB.

In first, you must be a little bit confortable with **ReactJS**, **ExpressJS**, **MongoDB** and **GraphQL**.

## Before cloning: 

=> Create new project in your MongoDb account, choose "connect to your application" and keep the value of auto generated link by MongoDB after validate


## After cloning:

1. Open two terminals or, for example, in your code editor, split your terminal.

    * In root directory run: **```npm install```**

    * Create, always in root directory, **nodemon.json** file.
  
    * In this **nodemon.json** file type: 
```javascript
{
    "env": {
        "MONGO_USER": "your user name",
        "MONGO_PASSWORD": "your password",
        "MONGO_DB": "your database name"
    }
} 
```

2. In the second terminal
