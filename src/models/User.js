const mongoose = require('../database');
const bcrypt = require('bcryptjs');

// User schema

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        unique: true,
        required: true,
        lowercase: true,
    },
    password:{
        type: String,
        required: true,
        select: false,
    },
    passwordResetToken: {
        type: String,
        select: false,
    },
    passwordResetExpires:{
        type: String,
        select: false
    },
    phone: {
        type: Number,
        required: true,
    },
    cep:{
        type: Number,
        require: true,
    },
    uf: {
        type: String,
        require: true,
    },
    state:{
        type: String,
        require: true,
    },
    city:{
        type: String,
        require: true,
    },
    street: {
        type: String,
        require: true,
    },
    number:{
        type: String,
        require: true,
    },
    complement: {
        type: String,
        require: false,
    },
    createdAt:{
        type: Date,
        default: Date.now,
    },
});

userSchema.pre('save', async function(next){
    const hash = await bcrypt.hash(this.password, 10);
    this.password = hash;

    next();
})

const User = mongoose.model('User', userSchema);

module.exports = User;