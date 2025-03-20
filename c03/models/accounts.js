const mongoose = require("mongoose");

const accountSchema = mongoose.Schema({
  username: String,
  email: String,
  password: String,
});

const AccountsModel = mongoose.model("Account", accountSchema, "accounts");

const getAccounts = async () => {
  return await AccountsModel.find();
};

const createAccount = async (data) => {
  const newAccount = new AccountsModel(data);
  return await newAccount.save();
};

const updateAccount = async (_id, data) => {
  return await AccountsModel.updateOne({ _id }, data);
};

const removeAccount = async (_id) => {
  return await AccountsModel.deleteOne({ _id });
};

module.exports = {
  getAccounts,
  createAccount,
  updateAccount,
  removeAccount,
};
