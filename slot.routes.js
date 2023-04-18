const express = require('express');
const router = express.Router()
// const cors = require("cors")

const slot_controller = require('../controllers/slot.controller');


router.get("/check",slot_controller.check);
router.post('/create',slot_controller.create_slot);//working
router.get('/fetch',slot_controller.slot_details);//working
router.get('/:id',slot_controller.get_slot_by_id);//working
router.get('/slot/:id',slot_controller.get_slot_by_expert_id);//working
router.put('/update/:id',slot_controller.update_slot_by_id);//working
router.delete('/delete/:id',slot_controller.delete_slot);//working
// router.delete('/delete_scheduleId/:id',slot_controller.delete_slot_by_scheduledId);

module.exports = router;