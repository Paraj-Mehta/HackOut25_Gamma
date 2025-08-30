const mongoose = require("mongoose");
    
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true, 
    },

    email: {
        type: String,
        required: true,
    },

    password: {
        type: String,
        required: true, 
    },

    organizationName: {
        type: String,
    },

    walletAddress: {
        type: String,
    },

    role: {
        type: String,
        required: true,
        enum: ['PRODUCER', 'BUYER', 'ADMIN'],
        default: 'BUYER',
    },

    // Role-specific field for producers, controlled by an admin
    isVerified: {
        type: Boolean,
        default: false,
    },
    // Role-specific field for buyers
    industryType: {
        type: String,
    },
});


const User = mongoose.model('User', userSchema);
module.exports = User;