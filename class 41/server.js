// import nodemailer package

const nodemailer = require("nodemailer");

// 2) create the transporter object

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "maddelavenkatagopichand@gmail.com",
        pass: "rumf oxer xvio ckpl"
    }
})

// set up the email data

const mailOptions = {
    from: "maddelavenkatagopichand@gmail.com",
    to: "sourabhc608@gmail.com",
    subject: "hello this is venkat",
    html: "<b>Hellloooo shilpaaaaaaaaaaaaaaaaa </b>"
}


// send the mail
transporter.sendMail(mailOptions, (error, info) => {
    if(error){
        return console.log("unable to send the mail", error)
    }
    console.log("message is sent successfully", info.messageId)
})