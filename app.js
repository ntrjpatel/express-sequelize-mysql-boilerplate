const express = require('express');
const bodyParser = require('body-parser');
const config = require('./config');
const app = express();

const testRoute = require('./routes/testRoute');
const userRoute = require('./routes/userRoute');

const accessLog = require('./middleware/accessLog');

app.use(bodyParser.json());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.urlencoded());


app.use('/test', accessLog, testRoute);
app.use('/user', accessLog, userRoute);

app.listen(config.PORT, () => {
  console.log(`Listening at http://localhost:${config.PORT}`);
});
