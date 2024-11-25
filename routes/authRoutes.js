//import libraries
const express=require("express")
const authController=require('../controllers/authController')

//initialize router
const router=express.Router();

//routes
router.get("/login",authController.loginGet)
router.post("/login",authController.loginPost)

router.get("/signup",authController.signUpGet)
router.post("/signup",authController.signUpPost)

module.exports=router;