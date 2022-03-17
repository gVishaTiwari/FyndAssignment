const expres = require('express');
const app = expres();
const port = 3300;
//const cors = require('cors');
const uri = process.env.MONGODB_URI;
const cookieparse = require('cookie-parser');
const db = require('./config/mongoose');
app.use(expres.json());

//app.use(cors());
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(cookieparse());
app.use('/',require('./routes'));

app.listen(process.env.PORT ,function(err){
    if(err){
        console.log(`Error in running the server:${err}`);
    }
    console.log(`Server is running on port:${process.env.PORT}`);
});