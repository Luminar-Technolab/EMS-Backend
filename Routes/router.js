const express = require('express')
const userController = require('../Controllers/userController')
const multerInstance = require('../MulterConfig/multerMiddleware')

const router = new express.Router()
//register
router.post('/register',multerInstance.single("user_profile"),userController.register)
//getallusers
router.get('/all-employees',userController.getallemployees)
//viewuser
router.get('/view-employee/:id',userController.viewuser)
//deleteuser
router.delete('/remove-employee/:id',userController.removeUser)
//edituser
router.put('/edit-employee/:id',multerInstance.single("user_profile"),userController.edit)

module.exports = router