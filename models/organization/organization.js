organizationSchema = new mongoose.Schema({
    owner_id: {
        type: ObjectId,
        required: true
    },
    organization_type: {
        type: String,
        default: ""
    },
    organization_name: {
        type: String,
        default: ""

    },
    default_project_role:{
        type:Number,
        default:3
    },
    team_size: {
        type: String,
        default: ""
    },
    goals: [{
        type: String,
        default: ""
    }],
    profile_img: {
        type: String,
        default: "",
    },
    address: {
        type: String,
        default: ""
    },
    logo: {
        type: String,
        default: ""
    },
    tax_id: {
        type: String,
        default: ""
    },
    currency: {
        type: String,
        default: ""
    },
    start_week_on: {
        type: String,
        default: ""
    },
    timezone: {
        type: String,
        default: ""
    },
    plan: {
        type: Number,
        default: 0
    },
    status: {
        type: Boolean,
        default: false
    },
    created_at: {
        type: Date
    },
    updated_at: {
        type: Date,
        default: new Date()
    },
})

const organizationModal = mongoose.model('organization', organizationSchema);
module.exports = organizationModal;