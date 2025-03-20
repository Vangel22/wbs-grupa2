const getAllAccounts = async () => {
  try {
  } catch (err) {
    return res.status(500).send("Invalid server error!");
  }
};

const createNewAccount = async () => {};

const updateCurrentAccount = async () => {};

const removeCurrentAccount = async () => {};

module.exports = {
  getAllAccounts,
  createNewAccount,
  updateCurrentAccount,
  removeCurrentAccount,
};
