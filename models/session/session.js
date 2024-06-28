SessionSchema = new mongoose.Schema({
    user_id: {
        type: ObjectId,
        require: true
    },
    org_id: {
        type: ObjectId,
        require: true
    },
    project_id: {
        type: ObjectId,
        require: true
    },
    todo_id: {
        type: ObjectId,
        require: true
    },
    start_time: {
        type: Date
    },
    end_time: {
        type: Date,
    },
    created_at: {
        type: Date,
    },
    updated_at: {
        type: Date,
    },
})

const SessionModal = mongoose.model('Session', SessionSchema);
module.exports = SessionModal;