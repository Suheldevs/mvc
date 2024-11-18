const userModel = require('../models/user')
async function handlePost(req, res) {
    try {
        const { name, email, password } = req.body;
        if (!name || !email || !password) {
            return res.status(400).json({ message: 'Please fill all the fields' });
        }
        const newUser = new userModel({
            name, email, password
        });
        await newUser.save();
        res.status(201).json({ message: 'User data save succesfully ', userdata: newUser })
    }
    catch (err) {
        res.status(201).json({ message: 'Internal Error', Error: err })
    }
}

module.exports = {
    handlePost,
}