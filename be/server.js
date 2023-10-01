require('dotenv').config();

let express = require('express')
let app = express()
let port = process.env.PORT || 8080

const bodyParser = require('body-parser')

// parse application/json
app.use(bodyParser.json())


let routes = require('./routes/main_route');
routes(app);

app.listen(port, async () => {  
    console.log('RESTful API server started on: ' + port);
});