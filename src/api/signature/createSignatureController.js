const Signature = require("../../model/signature/Signature")
const createSignature = async (request,response)=>{
    try {
        let newSignature = {
            signature:request.body.signature,
            userEmail:request.body.userEmail
        }
        let signature = Signature.build(newSignature);
        await signature.save();
        response.status(200).json({signature:signature});
    } catch (error) {
        response.status(500).json({error:error})
    }
};
module.exports = {
    createSignature
}