
const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username:String,
    hashedPassword:String
})

userSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        delete returnedObject.hashedPassword;
    }
});
module.exports = mongoose.model('User', userSchema)