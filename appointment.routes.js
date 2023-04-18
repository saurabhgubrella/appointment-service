const express = require('express');
const router = express.Router();

const appointment_controller = require('../controllers/appointment.controller')
router.get("/check",appointment_controller.check);
router.post('/create',appointment_controller.create_appointment) //working
router.get('/fetch',appointment_controller.appointment_details);//working
router.get('/:id',appointment_controller.get_appointment_by_appointment_id);//working
router.get('/experts/:id',appointment_controller.get_appointment_by_expert_id);//working
router.get('/users/:id',appointment_controller.get_appointment_by_user_id);//working
router.put('/experts/:appointmentId',appointment_controller.update_appointment_by_appointment_id);//working
router.put('/experts/expert/:id',appointment_controller.update_appointment_by_expert_id);//working
router.delete('/delete/:id',appointment_controller.delete_appointment);

module.exports = router;