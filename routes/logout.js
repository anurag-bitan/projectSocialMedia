const express = require('express');
const app = express();
const router = express.Router();
const bodyParser = require("body-parser")
const bcrypt = require('bcrypt');
const User = require('../schemas/UserSchema');
const { render } = require('pug');

app.use(bodyParser.urlencoded({ extended: false }));

router.get("/",(req,res,next)=>{
    req.session.destroy(()=>{
        res.redirect("/login");
    })
}
)

module.exports = router;