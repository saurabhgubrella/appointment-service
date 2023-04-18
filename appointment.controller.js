const Appointment = require('../models/appointment.model')

exports.check = function(req,res){
    res.send("Welcome from Appointment Controller !!!!")
}
exports.create_appointment = function(req , res){
    console.log("res"+req)
    let appointment = new Appointment({
        appointmentId: req.body.appointmentId,
        userEmailId: req.body.userEmailId,
        expertEmailId:req.body.expertEmailId,
        userName:req.body.userName,
        expertName:req.body.expertName,
        appointmentSpecialization:req.body.appointmentSpecialization,
        PatientConcern:req.body.PatientConcern,
        startTime:req.body.startTime,
        endTime:req.body.endTime,
        appointmentStatus:req.body.appointmentStatus,
        appointmentDate:req.body.appointmentDate,
        bookedOn:req.body.bookedOn,
        meetingId:req.body.meetingId
        
    });

    appointment.save(function(err){
        if(err){
            return next(err)
        }
        res.send('Appointment Created Successfully')
    })
}

exports.appointment_details = function(req,res){
    Appointment.find(function(err , result){
        if(err){
            return next(err)
        }
        res.send(result)
    });
}

exports.get_appointment_by_appointment_id = function (req, res) {
    console.log(req.params.id,"123")
    Appointment.find({appointmentId : req.params.id })
    
  
      .then((slot) => {
        res.send(slot);
        console.log(slot,"2260");
      })
      .catch((err) => {
        res.status(500);
      });
  };

exports.update_appointment_by_appointment_id = function(req,res){
    // console.log("req");
    Appointment.findOneAndUpdate({appointmentId:req.params.id},{$set:req.body},function(err,resp){
        if(err){
            //   return next(err);
            return res.send(err);
        }
        res.send('Appointment Updated successfully');
    })
}
exports.update_appointment_by_expert_id = function(req,res){
  // console.log("req");
  Appointment.findOneAndUpdate({expertEmailId:req.params.id},{$set:req.body},function(err,resp){
      if(err){
          //   return next(err);
          return res.send(err);
      }
      res.send('Appointment Updated successfully');
  })
}

exports.delete_appointment = function(req,res){
    console.log("delete")
    Appointment.findOneAndRemove({expertEmailId:req.params.id} , function(err,resp){
        if(err){
            return res.status(409).send(err);
        }
        res.send("Appointment deleted successfully");
    })
}

exports.get_appointment_by_expert_id = function (req, res) {
    console.log(req.params.id,"123")
    Appointment.find({ expertEmailId: req.params.id })
    
  
      .then((slot) => {
        res.send(slot);
        console.log(slot,"121");
      })
      .catch((err) => {
        res.status(500);
      });
  };

  exports.get_appointment_by_user_id = function (req, res) {
    console.log(req.params.id,"123")
    Appointment.find({ userEmailId: req.params.id })
    
  
      .then((slot) => {
        res.send(slot);
        console.log(slot,"121");
      })
      .catch((err) => {
        res.status(500);
      });
  };