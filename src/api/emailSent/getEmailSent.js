const EmailSent = require("../../model/emailSent/EmailSent")



const getEmail = async (req, res) => {
    try {
        const result = await EmailSent.findAll({
            where: { serialNumber: req.query.serialNumber, userEmail: req.query.email }
        })
        res.status(200).json(result)
    } catch (err) {
        res.status(500).json({ msg: err })
    }
}
module.exports = { getEmail }