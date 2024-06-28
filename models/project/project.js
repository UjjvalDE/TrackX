projectSchema = new mongoose.Schema({
    org_id: {
        type: ObjectId,
        require: true
    },
    name: {
        type: String,
        require: true
    },
    billable: {
        type: Boolean,
        default: false
    },
    record_activity: {
        type: Boolean,
        default: false
    },
    hours:{
        type:Number,
        default:0
    },
    description: {
        type: String
    },
    type: {
        type: String,
        default: ""
    },
    based_on: {
        type: String,
        default: ""
    },
    cost: {
        type: Number,
        default: 0
    },
    notify_at: {
        type: Number,
        default: 0
    },
    reset: {
        type: String,
        default: ""
    },
    start_date: {
        type: Date,
        default: ""
    },
    non_billable_time: {
        type: Boolean,
        default: false
    },
    status: {
        type: Boolean,
        default: true
    },
    client_id: {
        type: ObjectId,

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

const projectModal = mongoose.model('project', projectSchema);
module.exports = projectModal;