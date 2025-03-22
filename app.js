const express = require('express');
const config = require('./config');
const app = express();

const testRoute = require('./routes/testRoute');
const userRoute = require('./routes/userRoute');

const accessLog = require('./middleware/accessLog');

app.use(express.json());
app.use(express.urlencoded({ extended: true }))


app.use('/test', accessLog, testRoute);
app.use('/user', accessLog, userRoute);

app.listen(config.PORT, () => {
    console.log(`Listening at http://localhost:${config.PORT}`);
});
