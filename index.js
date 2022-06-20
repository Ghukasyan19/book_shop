const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./db/connection');
const config = require('./configs/config');
const routes =require('./routes/index')

const app = express();
const PORT = config.PORT;

app.use(bodyParser.json());
app.use('/api/v1/', routes);

 async function start() {
    try {
        app.listen(PORT, () => {
            console.log(`Server listening on port: ${PORT}`);
        });
        await sequelize.authenticate();
        console.log(`database successfully connected`);
    }catch (err) {
        console.log(err.message);
    }
}
start();



