const {
  createTestAccount,
  createTransport,
  getTestMessageUrl
} = require("nodemailer")

createTestAccount((err, account) => {
  let transporter = createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    secure: false,
    auth: {
      user: account.user,
      pass: account.pass
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
    secure: false,
    auth: {
      user,
      pass
    }
  });

  const info = await transporter.sendMail({
    from: 'az taraf amin ',
    to: "behnammohammadi@gahoo.com",
    subject: "Hello ✔",
    text: "Hello world?",
    html: `<p>Hello <span style="color: red;">world</span></p>`,
  });

  console.log('Preview URL: ' + getTestMessageUrl(info));

}

main().catch(console.error);