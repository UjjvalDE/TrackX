team_memberSchema = new mongoose.Schema({
    user_id: {
        type: ObjectId,
        require: true
    },
    team_id: {
        type: ObjectId,
        require: true
    },
    org_id: {
        type: ObjectId,
        require: true
    },
    role: {
        type: Number,
        default: 0
    },
    status: {
        type: Number,
        default: 2
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

const team_memberModal = mongoose.model('team_member', team_memberSchema);
module.exports = team_memberModal;