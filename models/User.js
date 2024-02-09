
const db=require('../config/db.js');

class UserModel{




static async getAllUser(){



    return new Promise((resolve,reject)=>{

        db.query('SELECT * FROM user',(err,rows)=>{
            if (err) {
                reject(err);
            } else {
                // Check if rows are returned
                if (rows.length > 0) {
                    console.log('Data exists:', rows);
                } else {
                    console.log('No data found.');
                }
                resolve(rows);
            }
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

static async deleteUser(id){

    return new Promise((resolve,reject)=>{

        db.query('DELETE FROM user WHERE id=?',[id],(err,rows)=>{

            if(!err)

            resolve(true);
            else 
            {
                console.log("the error is "+err);
                resolve(false);

            }
        });
    });



}}

module.exports=UserModel;