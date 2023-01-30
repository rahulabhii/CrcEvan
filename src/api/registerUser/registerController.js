const RegisterUser = require('../../model/registerUser/RegisterUser');

const uploadRegisterUser = async (request,response)=>{
    try {

        let newUser = {
            firstName:request.body.firstName,
            lastName:request.body.lastName,
            email:request.body.email,
            token:request.body.token
        };

        // console.log(newUser)

        let user = await RegisterUser.findOne({
            where:{
                email:newUser.email
            },
        });

        if(user){
            return response.status(401).json({
                message:`User already  exists`
            });
        }
        
        // console.log(newUser)
        user = RegisterUser.build(newUser);
        await user.save();
        response.status(200).json({
            id:user.id,
            firstName:user.firstName,
            lastName:user.lastName,
            email:user.email
        });
    } catch (error) {
        response.status(500).json({message:'Enter valid user email'});
    }
};


const getRegisterUserByEmailId = async (request,response)=>{
    try {

        let emailId = request.params.id;

        let user = await RegisterUser.findOne({
            attributes:['id','firstName','lastName','email'],
            where:{
                email:emailId
            }
        });

        if(!user){
            return response.status(401).json({
                message:`User not exists with email ${emailId}`
            });
        }

        response.status(200).json({user:user});
    } catch (error) {
        response.status(500).json({error:error});
    }
};

module.exports ={
    uploadRegisterUser,
    getRegisterUserByEmailId
};