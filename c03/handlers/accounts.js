const {
  getAccounts,
  createAccount,
  updateAccount,
  removeAccount,
} = require("../models/accounts");
const {
  validateAccount,
  AccountCreate,
  AccountUpdate,
} = require("../models/validate");

const getAllAccounts = async (req, res) => {
  try {
    const accounts = await getAccounts();
    return res.status(200).send(accounts);
  } catch (err) {
    return res.status(500).send("Invalid server error!");
  }
};

const createNewAccount = async (req, res) => {
  try {
    await validateAccount(req.body, AccountCreate);
    await createAccount(req.body);
    return res.status(200).send("Account created successfully!");
  } catch (err) {
    return res.status(500).send(err ? err.error : "Invalid server error!");
  }
};

const updateCurrentAccount = async (req, res) => {
  try {
    await validateAccount(req.body, AccountUpdate);
    await updateAccount(req.params.id, req.body);
    return res
      .status(200)
      .send(`Account with id ${req.params.id} updated successfully!`);
  } catch (err) {
    return res.status(500).send(err ? err.error : "Invalid server error!");
  }
};

const removeCurrentAccount = async (req, res) => {
  try {
    await removeAccount(req.params.id);
    return res
      .status(200)
      .send(`Account with id ${req.params.id} deleted successfully!`);
  } catch (err) {
    return res.status(500).send("Invalid server error!");
  }
};

module.exports = {
  getAllAccounts,
  createNewAccount,
  updateCurrentAccount,
  removeCurrentAccount,
};
