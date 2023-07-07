const express=require("express");
const router = express.Router();
const classController=require("./../controller/classController")

router.route("/class")
    .get(classController.getAllClass)
    .post(classController.addClass)
    .put(classController.updateClass)
    .delete(classController.deleteClass)

router.route("/class/:id")
    .get(classController.getClassById)
router.route("/class/child /:id")
    .get(classController.getClassChildrenInfo)

router.route("/class/teacher/:id")
    .get(classController.getClassSupervisorInfo)


module.exports=router;

    