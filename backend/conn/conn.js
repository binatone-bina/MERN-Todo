const mongoose = require('mongoose');

const conn = async (req, res) =>{
    try {
        await mongoose.connect('mongodb+srv://swabist0077:mHLRaDvUfE6VWSIk@todocluster1.pgncx.mongodb.net/').then(()=> {
            console.log('Connected');
        });
    } catch (error) {
        res.status(400).json({message: "not connected"});
    }
}

conn();