desktopSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    file: {
        type: String,
        required: true,
    },
    file_extension: {
        type: String,
        require : true
    },
    version : {
        type: String,
        require : true
    },
    created_at: {
        type: Date
    },
});

const desktopModal = mongoose.model('desktopSchema', desktopSchema);
module.exports = desktopModal;