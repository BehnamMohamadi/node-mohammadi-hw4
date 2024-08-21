const {
  createTestAccount,
  createTransport,
  getTestMessageUrl
} = require("nodemailer")

createTestAccount((err, account) => {
  // create reusable transporter object using the default SMTP transport
  let transporter = createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: account.user, // generated ethereal user
      pass: account.pass // generated ethereal password
    }
  });
});

async function main() {



  const {
    user,
    pass
  } = await createTestAccount()
  const transporter = createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user, // generated ethereal user
      pass // generated ethereal password
    }
  });
  // send mail with defined transport object
  const info = await transporter.sendMail({
    from: 'az taraf amin ', // sender address
    to: "behnammohammadi@gahoo.com", // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: `<p>Hello <span style="color: red;">world</span></p>`, // html body
  });

  console.log('Preview URL: ' + getTestMessageUrl(info));

  // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>
}

main().catch(console.error);