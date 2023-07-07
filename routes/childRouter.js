const express = require("express");
const router = express.Router();
const childController=require("./../controller/childController")
router.route("/child")
    .get(childController.getAllChildren)
    .post(childController.addChildren)
    .put(childController.updateChildrenr)
    .delete(childController.deleteChildren)
router.route("/child/:id")
        .get(childController.getChildrenById)
router.route("/child/calss/:id")
        .get(childController.ChildrenchildClassInfo)



module.exports = router;