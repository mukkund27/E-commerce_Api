const UserModel = require('./../models/user_model');
const bcrypt =require('bcrypt');

const UserController = {


    createAccount: async function (req, resp) {
        try {
            const userData = req.body;
            const newUser = new UserModel(userData);
            await newUser.save();
            return resp.json({ success: true, data: newUser, message: "User created!" })
        }
        catch (ex) {
            return resp.json({ success: false, message: ex });
        }
    },

    signIn: async function (req, resp) {
        try { 
            const {email , password}=req.body;
            const foundUser =await UserModel.findOne({email :email});
            if(!foundUser){
                return resp.json({ success: false, message: "User not found!" });
            }

            const MatchPassword = bcrypt.compareSync(password,foundUser.password);
            if(!MatchPassword){
                return resp.json({ success: false, message: "Incorrect Password! " });
            }
            
            return resp.json({ success: true, message: "SignIn Successful",data:foundUser });


        } catch (ex) {
            return resp.json({ success: false, message: ex });
        }

    }
};

module.exports = UserController;