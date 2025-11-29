const Booking = require("../models/Booking");
const transporter = require("../config/mailer");

exports.createBooking = async (req, res) => {
    const {customerName, service, date} = req.body;

    try {
        const booking = await Booking.create({
            customerName, 
            service, 
            date, 
            createdBy: req.user.userId
        });

        // send the mail
        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: "maddelavenkatagopichand@gmail.com",
            subject: "Your booking is confirmed",
            html:`<p>Dear ${customerName}, <br> Your booking for <b>${service} on <b>${date}<b> is confirmed</p> `
        })

        res.status(201).json({
            message: "Booking created and email is sent successfully", booking
        })

    } catch(err){
        res.status(500).json({
            error: err.message
        })
    }
}