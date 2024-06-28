to_doSchema = new mongoose.Schema({
    createdby_id: {
        type: ObjectId,
        require: true
    },
    project_id: {
        type: ObjectId,
        require: true
    },
    assignee_id: {
        type: ObjectId,
        require: true
    },
    title: {
        type: String,
        default: ""
    },
    completed: {
        type: Boolean,
        default: false
    },
    completed_at: {
        type: Date,
    },
    created_at: {
        type: Date,
    },
    updated_at: {
        type: Date,
    },
})

const to_doModal = mongoose.model('to_do', to_doSchema);
module.exports = to_doModal;