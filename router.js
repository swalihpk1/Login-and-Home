var express = require("express");
const { addListener } = require("nodemon");
var router = express.Router();

const credencial = {
    email: "nisunasih135@gmail.com",
    password: 'nasih123'
}

//login user
router.post('/login', (req, res) => {
    if (req.body.email === credencial.email && req.body.password === credencial.password) {
        req.session.user = req.body.email;
        res.redirect("/route/home")
        // res.end("login succesfull...");
    } else {
        res.end("login failed...")
    }
});

//route for homeapage
router.get('/home',(req, res) => {
    if (req.session.user) {
        res.render('home',);  
    } 
})

//route for logout 
router.get('/logout', (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            console.log(err);
            res.send(err);
        } else {
            res.render('login');
        }
    })
})


module.exports = router;