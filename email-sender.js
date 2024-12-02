// email-sender.js  
const nodemailer = require('nodemailer');  

 
const transporter = nodemailer.createTransport({  
    service: 'gmail',  
    auth: {  
        user: 'your_email@example.com',
        pass: 'your_password',  
    },  
});  


const mailOptions = {  
    from: 'your_email@example.com',  
    to: 'your_email@example.com', 
    subject: 'Hello from Node.js',  
    text: 'This is a test email sent from my Node.js application!',  
};  


transporter.sendMail(mailOptions, (error, info) => {  
    if (error) {  
        return console.log('Error occurred:', error);  
    }  
    console.log('Email sent successfully:', info.response);  
});