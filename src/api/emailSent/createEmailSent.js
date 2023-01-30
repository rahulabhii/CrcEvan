var nodemailer = require('nodemailer');
const EmailSent = require("../../model/emailSent/EmailSent");

const sentEmail = async (req, res) => {
  try {
    var transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.USER,
        pass: process.env.PASS
      }
    });

    const generateAuth = async (accessKey, secretKey) => {
      return new Buffer.from(`${accessKey}:${secretKey}`).toString();
    };

    var mailOptions = {
      from: `testingdevice1406@gmail.com`,
      to: req.body.to,
      url: req.body.url,
      subject: 'Asset Inspection Application Report',
      headers: {
        'Authorization': await generateAuth(process.env.ACCESSKEY, process.env.SECRETKEY),

      },
      html: `<article>
  <table style="border:1px solid black">
  <header>
  <h3 style="background-color:red"> Asset Inspection Application: Report Service Notification</h3>
    </header>
    <a href=${req.body.url} > <h1>Submitted report link: <span style="color:purple">click here to download report<span></h1></a>
    <p>Please use the link to see the submitted report.
    For any queries or issues,please write to our support team.
    </p>
  <footer style= "background-color:black;border:1px solid black;color:white">
    <p >You are receiving this email because you signed up for <span "background-color:yellow">Asset Inspection Application <br>
    Copyright(c)2023</p>
  </footer>
  </table>
  </article>`
    };


    await EmailSent.create({
      from: `testingdevice1406@gmail.com`,
      to: req.body.to,
      url: req.body.url,
      userEmail: req.body.userEmail,
      date: req.body.date,
      serialNumber: req.body.serialNumber
    })

    await transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        res.status(500).json(error);
      } else {
        res.status(200).json({ message: info.response })
      }
    });
  } catch (err) {
    res.status(500).json({ msg: err })
  }
}
module.exports = { sentEmail };




