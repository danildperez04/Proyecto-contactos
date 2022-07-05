const express = require('express');
const routerApi = require('./routes/index');

const app = express();
const port = process.env.PORT || 4000;

app.get('/', (req, res) =>{
    res.send('Hola mundo');
});

routerApi(app);

app.listen(port, () =>{
    console.log(`Server listening on port ${port}`)
});
