const Slot = require("../models/slot.model");
// const cors = require("cors")
exports.check = function (req, res) {
  res.send("Welcome from Slot Controller !!!!");
};

exports.create_slot = function (req, res) {
  console.log("res" + req);
  let slot = new Slot({
    scheduleId: req.body.scheduleId,
    expertId: req.body.expertId,
    startTime: req.body.startTime,
    endTime: req.body.endTime,
    status: req.body.status,
    scheduleDate: req.body.scheduleDate,
  });

  slot.save(function (err) {
    if (err) {
      return next(err).status(409);
    }
    res.send("Slot Created Successfully").status(201);
  });
};

exports.slot_details = function (req, res,next) {
  Slot.find(function (err, result) {
    if (err) {
      return next(err);
    }
    res.send(result);
  });
};

exports.get_slot_by_id = function (req, res) {
// console.log("loj");
  
Slot.findOne(req.params.id, function (err, resp) {
    if (err) {
      return res.status(409).send(err);
    }
    res.send(resp);
    })
  
};

exports.get_slot_by_expert_id = function (req, res) {
  // console.log("lojexpert");
    Slot.find({ expertId:req.params.id , status:"AVAILABLE"}, function (err, resp) {
      if (err) {
        return res.status(409).send(err);
      }
      res.send(resp);
      })
     
  };
exports.update_slot_by_id = function (req, res) {

  // console.log("req.body")

  Slot.findOneAndUpdate(
    req.params.id,
    { $set: req.body },
    function (err, resp) {
      if (err) {
        return res.status(409).send(err);
      }
      res.send("Slot Updated successfully");
    }
  );
};

exports.delete_slot = function (req, res) {
  // console.log("slotid");
  Slot.findOneAndRemove({scheduleId:req.params.id}, function (err, resp) {
    if (err) {
      return res.send(err)
    }
    res.send("Slot deleted successfully");
  });
};

