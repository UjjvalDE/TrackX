teamSchema = new mongoose.Schema({
    org_id: {
        type: ObjectId,
        require: true
    },
    team_name: {
        type: String,
        require: true
    },
    approve_timesheets: {
        type: Boolean,
        default: false
    },
    schedule_shifts: {
        type: Boolean,
        default: false
    },
    approve_time_off_requests: {
        type: Boolean,
        default: false
    },
    create_and_edit_teams_projects: {
        type: Boolean,
        default: false
    },
    edit_team_members_and_project_roles: {
        type: Boolean,
        default: false
    },

    approve_timesheets_to_team_leads: {
        type: Boolean,
        default: false
    },
    approve_time_to_team_leads: {
        type: Boolean,
        default: false
    },
    schedule_shifts_to_team_leads: {
        type: Boolean,
        default: false
    },
    created_By: {
        type: ObjectId,
        require: true
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

const teamModal = mongoose.model('team', teamSchema);
module.exports = teamModal;