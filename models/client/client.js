clientSchema = new mongoose.Schema({
    email: {
        type: String,
    },
    org_id:{
        type:ObjectId,
        require:true,
    },
    status:{
        type:Boolean,
        // require:true,
        default:true
    },
    name: {
        type: String,
        require: true
    },
    address:{
        type: String,
        default:""
    },
    number:{
        type: Number,
        default:0
    },
    budget_type:{
        type: String,
        default:""
    },
    based_on:{
        type: String,
        default:""
    },
    notify_at:{
        type: Number,
        default:0
    },
    reset:{
        type: String,
        default:""
    },
    hours:{
        type:Number,
        default:0
    },
    start_date:{
        type: Date,
        default:""
    },
    non_billable_time:{
        type:Boolean,
        default:false
    },
    cost:{
        type: Number,
        default:0
    },
    created_at: {
        type: Date,
    },
    updated_at: {
        type: Date,
        default: new Date()
    },
})

const clientModal = mongoose.model('client', clientSchema);
module.exports = clientModal;