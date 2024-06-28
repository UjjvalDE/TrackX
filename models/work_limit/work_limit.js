work_limitSchema = new mongoose.Schema({
    user_id: {
        type: ObjectId,
        require: true
    },
    org_id: {
        type: ObjectId,
        require: true
    },
    weekly_limit: {
        type: Number,
        default: 0
    },
    daily_limit: {
        type: Number,
        default: 0
    },
    created_at: {
        type: Date,
    },
    updated_at: {
        type: Date,
    },
})

const work_limitModel = mongoose.model('work_limit', work_limitSchema);
module.exports = work_limitModel;