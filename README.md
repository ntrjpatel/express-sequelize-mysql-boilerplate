# express-sequelize-mysql-boilerplate
This is a ready-to-start NodeJS-based ExpressJS, Sequelize, MySQL boilerplate application

1. To install the application, open the terminal go into the given code's root directory, and execute the below command
```
npm install
```

2. Create a database with the name ***`express-sequalize-mysql-boilerplate`*** in MySQL

3. Run the DB-Migrate command to create tables
```
npm run db-migrate
```

4. Start the API Server
```
npm start
```

5. This will start the API server on the port defined in ***`/config/index.js`*** file (Default: ***3000***). Once the API server is started you will get the below message in your terminal console, this means your API server is started successfully.
```
Listening at "http://localhost:3000"
```

6. Now access the below URL from your browser to test if your API is working or not
```
http://localhost:3000/test?name=NetrajPatel
```

7. If you see ***`Hello NetrajPatel`*** it means you are ready to go code...
