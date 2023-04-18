const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;
const appointmentSchema = new mongoose.Schema(
    {
        appointmentId:String,
        userEmailId:String,
        expertEmailId:String,
        userName:String,
        expertName:String,
        appointmentSpecialization:String,
        PatientConcern:String,
        startTime:String,
        endTime:String,
        appointmentStatus:String,
        appointmentDate:String,
        bookedOn:String,
        meetingId:String
    },
    {timestamps:true}
)
module.exports = mongoose.model("Appointment",appointmentSchema);