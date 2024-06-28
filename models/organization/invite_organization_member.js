// invite_organization_memberSchema = new mongoose.Schema({
//     user_id: {
//         type: ObjectId,
//         require:true
//     },
//     org_id:{
//         type:ObjectId,
//          require:true
//     },
//     status:{
//         type:Boolean,
//         default:false
//     },
//     role:{
//         type:Number,
//         default:0
//     },
//     pay_period:{
//         type:String,
//         default:""
//     },
//     pay_rate:{
//         type:String,
//         default:""
//     },
//     weekly_limit:{
//         type:Number,
//          default:0
//      },
//     created_at: {
//         type: Date,
//         default: new Date()
//     },
//     updated_at: {
//         type: Date,
//         default: new Date()
//     },
// })

// const inviteOrganizationModal = mongoose.model('invite_organization_member', invite_organization_memberSchema);
// module.exports = inviteOrganizationModal;