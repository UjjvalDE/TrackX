contactSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    created_at: {
        type: Date,
        default: new Date()
    },
})

const contactModel = mongoose.model('contact', contactSchema);
module.exports = contactModel;