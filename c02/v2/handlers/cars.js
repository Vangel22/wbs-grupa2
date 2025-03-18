const { get, create, update, remove } = require("../models/cars");

const getVehicle = async (req, res) => {
  try {
    const cars = await get();
    return res.status(200).send(cars);
  } catch (err) {
    console.log(err);
    return res.status(500).send("Internal Server Error!");
  }
};

const createVehicle = async (req, res) => {
  try {
    await create(req.body);
    return res.status(200).send("Vehicle created successfully!");
  } catch (err) {
    console.log(err);
    return res.status(500).send("Internal Server Error!");
  }
};

const updateVehicle = async (req, res) => {
  try {
    // Vasiot kod ovde
  } catch (err) {
    console.log(err);
    return res.status(500).send("Internal Server Error!");
  }
};

const removeVehicle = async (req, res) => {
  try {
    await remove(req.params.id);
    return res.status(200).send("Vehicle removed successfully!");
  } catch (err) {
    console.log(err);
    return res.status(500).send("Internal Server Error!");
  }
};

module.exports = {
  getVehicle,
  createVehicle,
  updateVehicle,
  removeVehicle,
};
