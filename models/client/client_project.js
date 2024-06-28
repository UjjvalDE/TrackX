clientProjectSchema = new mongoose.Schema({
    
    client_id:{
        type:ObjectId,
        require:true,
    },
    project_id:{
        type:ObjectId,
        // require:true,
        default:true
    },
    
    created_at: {
        type: Date,
        
    },
    updated_at: {
        type: Date,
       
    },
})

const clientProjectModel = mongoose.model('client_project', clientProjectSchema);
module.exports = clientProjectModel;