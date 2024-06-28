project_memberSchema = new mongoose.Schema({
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
    role: {
        type: Number,
        default: 0
    },
    pay_rate: {
        type: Number,
        default: 0
    },
    bill_rate: {
        type: Number,
        default: 0
    },
    created_at: {
        type: Date,
        default: new Date()
    },
    updated_at: {
        type: Date,
        default: new Date()
    },
})

const project_memberModal = mongoose.model('project_member', project_memberSchema);
module.exports = project_memberModal;