team_projectSchema = new mongoose.Schema({
    user_id: {
        type: ObjectId,
        require:true
    },
    project_id:{
        type:ObjectId,
         require:true
    },
    team_id:{
        type:ObjectId,
         require:true
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

const team_projectModal = mongoose.model('team_project', team_projectSchema);
module.exports = team_projectModal;