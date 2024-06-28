screenShotSchema = new mongoose.Schema({
    ss_url: {
        type: String,
        require: true
    },
    session_id: {
        type: ObjectId,
        require: true
    },
    key_event: {
        type: Number,
        default: 0
    },
    mouse_event: {
        type: Number,
        default: 0
    },
    created_at: {
        type: Date,
    },
    updated_at: {
        type: Date,
    },
    task: {
        type: Array,
    },
})

const screenShotModal = mongoose.model('screen_shot', screenShotSchema);
module.exports = screenShotModal;