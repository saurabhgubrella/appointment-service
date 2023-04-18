const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;
// const cors = require("cors")
const slotSchema = new mongoose.Schema(
    {
        scheduleId: String,
        expertId: String,
        scheduleDate: String,
        startTime: String,
        endTime :String ,
        status: String,
    
    },
    {timestamps:true}
)
module.exports = mongoose.model("Slot",slotSchema);