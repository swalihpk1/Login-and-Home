const express = require("express");
const app = express();
const path = require('path');
const bodyparser = require("body-parser");
const session = require("express-session");
const {v4:uuidv4} = require("uuid");
const router = require("./router");
const nocache = require("nocache");

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));

//view engine setup
app.set('view engine', 'ejs');

//load static assets
app.use('/static', express.static(path.join(__dirname, 'public')));
app.use('/assets', express.static(path.join(__dirname,'public/assets')));

app.use(session({
    secret:uuidv4(),
    resave:false,
    saveUninitialized:true
 
}));
app.use(nocache());

app.use('/route',router);

// login route
app.get('/', (req, res) => {
    if(!req.session.user){
        res.render('login',)
    }else{
        res.redirect('/route/home');
        
    }
})



const PORT = process.env.PORT || 7001;
app.listen(PORT, () => console.log(`Server running on : ${PORT}`));