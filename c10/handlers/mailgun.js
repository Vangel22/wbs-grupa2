const { sendMail } = require("../pkg/mailer");
const { validateSchema, MailgunFields } = require("../pkg/mailer/validate");

const sendWelcomeMail = async (req, res) => {
  try {
    await validateSchema(req.body, MailgunFields);
    const result = await sendMail(req.body.to, "WELCOME", req.body.message);
    return res.status(200).send(result);
  } catch (err) {
    console.error(err);
    return res.status(500).send("Internal Server Error!");
  }
};

module.exports = {
  sendWelcomeMail,
};
