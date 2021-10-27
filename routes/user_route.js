const express  = require("express");
const router = express.Router();
const UserController = require("../controller/user_controller")


router.post('/user_add',UserController.addUser)

router.get('/all_user',UserController.allUsers)

router.get('/single_user/:id',UserController.getSingleUser);

router.put('/update_user/:id',UserController.updateUser)

router.delete('/delete_user/:id',UserController.deleteUser)


module.exports = router;