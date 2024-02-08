
const db=require('../config/db.js');

class UserModel{




static async getAllUser(){



    return new Promise((resolve,reject)=>{

        db.query('SELECT * FROM users',(err,rows)=>{

            if(!err)4

            resolve(rows);
        });
    });
}

static async addUser(name,email,password){

    return new Promise((resolve,reject)=>{

        db.query('INSERT INTO user (name,email,password) VALUES (?,?,?)',[name,email,password],(err,rows)=>{

            if(!err)

            resolve(true);
            else 
            {
                console.log("the error is "+err);
                resolve(false);

            }
        });
    });
}



}

module.exports=UserModel;