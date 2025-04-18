const { sendMail } = require("../pkg/mailer");
const { validate, MailgunFields } = require("../pkg/mailer/validate");

const sendWelcomeMail = async (req, res) => {
  try {
    await validate(req.body, MailgunFields);
    const result = await sendMail(req.body.to, "WELCOME", req.body.message);
    // req.body.message = {first_name, last_name, email}
    return res.status(200).send(result);
  } catch (err) {
    console.error(err);
    return res.status(500).send("Internal Server Error");
  }
};

const sendPasswordResetMail = async (req, res) => {
  try {
    await validate(req.body, MailgunFields);
    const result = await sendMail(
      req.body.to,
      "PASSWORD_RESET",
      req.body.message
    );
    // req.body.message = {first_name, last_name, link}

    return res.status(200).send(result);
  } catch (err) {
    console.error(err);
    return res.status(500).send("Internal Server Error");
  }
};

module.exports = {
  sendWelcomeMail,
  sendPasswordResetMail,
};
