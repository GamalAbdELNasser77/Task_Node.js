const express = require("express");
const router = express.Router();//to create express rout object then return it 
const controller = require("../controller/teacherController");

router.route("/teachers")
    .get(controller.getAllTeachers)
    .post(controller.addTeacher)
    .put(controller.updateTeacher)
    .delete(controller.deleteTeacher)

router.route("/teachers/supervisors")
    .get(controller.getTeacherSuperVisors)

router.route("/teachers/:id")
    .get(controller.getTeacherById)






module.exports = router;


