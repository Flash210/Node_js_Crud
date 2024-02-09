
const userModel=require('../models/User');

class UserController {


  static async getAllUser(req, response) {
   

    var result = await userModel.getAllUser();

    if (result) {
      console.log(result);
      response.send(result);
    }
    else
    {
      console.log("No data found");
      response.send("No data found");
    }
  }



static async addUser(req,response){
    var name=req.body.name;
    var email=req.body.email;
    var password=req.body.password;

    var result=await userModel.addUser(name,email,password);
    if(result)
    {
        response.send("User added successfully");
    }
    else
    {
        response.send("Failed to add user");
    }

}


static async deleteUser(req,response){
    var id=req.body.id;
    if(id)
    {
      var result=await userModel.deleteUser(id);
    if(result)
    {
      response.send("User deleted successfully");

    }
    }
    else
    {
        response.send("Failed to delete user");
    }

}


static async updateUser(req,response){

const id = req.body.id;
var name=req.body.name;
var email=req.body.email;
var password=req.body.password;



}

}

module.exports = UserController; // will be extracted and used in other files to connect to the database