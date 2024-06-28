organization_memberSchema = new mongoose.Schema({
    user_id: {
        type: ObjectId,
        require: true
    },
    org_id: {
        type: ObjectId,
        require: true
    },
    role: {
        type: Number,
        default: 4
    },
    status: {
        type: Boolean,
        default: true
    },
    default_project_role: {
        type: Number,
        default: 3
    },
    job_title: {
        type: String,
        default: ""
    },
    job_type: {
        type: String,
        default: ""
    },
    location: {
        type: String,
        default: ""
    },
    employee_id: {
        type: Number,
        default: 0
    },
    tax_info: {
        type: String,
        default: ""
    },
    time_track: {
        type: Boolean,
        default: false
    },
    member_add_allProject: {
        type: Boolean,
        default: false
    },
    invite_accpeted: {
        type: Boolean,
        default: false
    },
    add_as: {
        type: String,
        default: ""
    },
    modify_time: {
        type: Boolean,
        default: false
    },
    allowed_app: {
        type: Number,
        default: 0
    },
    idle_timeOut: {
        type: Number,
        default: 0
    },
    keep_idle_time: {
        type: Number,
        default: 0
    },
    pay_period: {
        type: String,
        default: ""
    },
    pay_type: {
        type: String,
        default: ""
    },
    timesheet_approval: {
        type: Boolean,
        default: false
    },
    pay_rate: {
        type: Number,
        default: 0
    },
    bill_rate: {
        type: Number,
        default: 0
    },
    weekly_limit: {
        type: Number,
        default: 0
    },
    daily_limit: {
        type: Number,
        default: 0
    },
    shift_to_set_daily_limit: {
        type: Boolean,
        default: false
    },
    day_allow_work: [{
        type: Number,
        default: 0
    }],
    created_at: {
        type: Date
    },
    updated_at: {
        type: Date,
        default: new Date()
    },
})

const organization_memberModal = mongoose.model('organization_member', organization_memberSchema);
module.exports = organization_memberModal;