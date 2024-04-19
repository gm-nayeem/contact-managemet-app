const { Schema, model } = require('mongoose');

const contactSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
    },
    phone: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    profilePicture: {
        type: String,
        required: true,
    },

}, { timestamps: true });

const Contact = model('Contact', contactSchema);

module.exports = Contact;
