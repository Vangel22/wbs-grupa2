const { Validator } = require("node-input-validator");

// data -> req.body , schema -> Account Schema

const AccountCreate = {
  username: "required|string",
  email: "required|email",
  password: "required|string",
};

const AccountUpdate = {
  username: "string",
  email: "string",
  password: "string",
};

const validateAccount = async (data, schema) => {
  const validator = new Validator(data, schema);
  const err = await validator.check();

  console.log("Greska", err);

  if (!err) {
    throw {
      code: 400,
      error: "Greska na klient!",
    };
  }
};

module.exports = {
  AccountCreate,
  AccountUpdate,
  validateAccount,
};
