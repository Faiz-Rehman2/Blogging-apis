import mongoose from 'mongoose';

const userSchema = new mongoose.schema({

    fullName: { 
        type: String, 
        required: true ,
    },
    userName: { 
        type: String, 
        required: true ,
    },
    password: { 
        type: String, 
        required: true ,
    },
    imageUrl: { 
        type: String, 
        required: true ,
    },


})
module.exports = mongoose.model('User', userSchema)