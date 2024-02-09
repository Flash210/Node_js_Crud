

const express = require('express');
const userController = require('../controllers/user_controller');
const router=require('express').Router();


router.get('/',(req,res,next)=>{

    res.send("Nodyy");
});

router.get("/all",userController.getAllUser);
router.post("/add",userController.addUser);
router.delete("/delete",userController.deleteUser);
router.put("/update",userController.updateUser)


module.exports = router; // will be extracted and used in other files to connect to the database