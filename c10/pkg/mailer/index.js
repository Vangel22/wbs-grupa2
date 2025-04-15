const fs = require("fs");
const formData = require("form-data");
const Mailgun = require("mailgun.js");
const mailgun = new Mailgun(formData);

const { getSection } = require("../config");

const mailTemplates = {
  WELCOME: {
    title: "Welcome to our website",
    template: "welcome.html",
  },
  PASSWORD_TEMPLATE: {
    title: "Your password reset link has been generated",
    template: "reset_password.html",
  },
};

// sendMail("h.vangel22@gmail.com", "WELCOME", { first_name: "Vangel", last_name: "Hristov", email: "h.vangel22@gmail.com" });
// sendMail("h.vangel22@gmail.com", "PASSWORD_TEMPLATE", { first_name: "Vangel", last_name: "Hristov", link: "http://test.com" });

const sendMail = async (to, type, data) => {
  try {
    // type moze da bide WELCOME ili PASSWORD_TEMPLATE
    const mg = mailgun.client({
      username: "api",
      key: getSection("development").api_key || "",
    });

    const title = mailTemplates[type].title;
    // mailTemplates["WELCOME"].title
    const templatePath = `${__dirname}/../../email_templates/${mailTemplates[type].template}`;
    //   mailer/../../email_templates/welcome.html`;
    let content = await readTemplate(templatePath);

    for (let i in data) {
      // WELCOME
      // i = 0 -> first_name
      // i = 1 -> last_name
      // i = 2 -> email

      const regex = new RegExp(`\{\{${i}}\}\}`);
      content = content.replace(regex, data[i]);
      // {{first_name}} -> Vangel
      // {{last_name}} -> Hristov
      // {{email}} -> h.vangel22@gmail.com
    }

    const options = {
      from: getSection("development").sender_email,
      to: to,
      subject: title,
      html: content,
    };

    console.log(options);

    return await mg.messages.create(getSection("development").domain, options);
  } catch (err) {
    throw err;
  }
};

const readTemplate = async (filename) => {
  return new Promise((resolve, reject) => {
    fs.readFile(filename, "utf-8", (err, data) => {
      if (err) return reject(err);
      return resolve(data);
    });
  });
};

module.exports = {
  sendMail,
};
