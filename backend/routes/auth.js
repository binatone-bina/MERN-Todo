const router = require('express').Router();
const User = require('../models/user');
const bcrypt = require('bcryptjs');

//SIGN UP
router.post('/register', async (req, res) => {
    try {
        const {email,username, password} = req.body;

        const hashPassword = bcrypt.hashSync(password);

        const user = new User({email, username, password: hashPassword});
        await user.save().then(() => {
            res.status(200).json({message: 'Sign Up successfull'});
        });
    } catch (error) {
        res.status(200).json({message: 'User already exists'});
    }
});

//LOG IN or SIGN IN
router.post('/signin', async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email });

        if (!user) {
            return res.status(200).json({message: "Please sign up first"});
        }

        const isPasswordCorrect = bcrypt.compareSync(req.body.password, user.password);

        if (!isPasswordCorrect) {
            return res.status(200).json({message: "Password is Incorrect"});
        }
        

        const {password, ...other} = user._doc;//_doc conatins all the user info stored in db and other is created to stroing everything except password in it
        
        return res.status(200).json({other});

    } catch (error) {
        res.status(200).json({message: 'User already exists'});
    }
});

module.exports = router;