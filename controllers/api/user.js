const router = require('express').Router();
const { User } = require('../../models');


router.post('/login', async (req, res) => {
    try {
        const userData = await User.findOne({ where: { email: req.body.email } });


        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.logged_in = true;

       
        });

    } catch (err) {
        res.status(400).json(err);
    }
});