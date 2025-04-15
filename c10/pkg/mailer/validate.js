const { Validator } = require("node-input-validator");

const MailgunFields = {
  to: "required|string",
  message: "required|object",
};

const validateSchema = async (data, schema) => {
  const validator = new Validator(data, schema);
  const err = await validator.check();

  if (!err) {
    throw {
      code: 400,
      error: "Greska na klient!",
    };
  }
};

module.exports = {
  MailgunFields,
  validateSchema,
};
