const { read, write } = require("../read-write");

const getCars = async (req, res) => {
  try {
    const cars = await read("data.json");
    return res.status(200).send(cars);
  } catch (err) {
    console.log(err);
    return res.status(500).send("Internal Server Error!");
  }
};

const createCar = async (req, res) => {
  try {
    const cars = await read("data.json");
    const newCar = req.body;
    cars.push(newCar);
    await write("data.json", cars);
    return res.status(200).send("New car added!");
  } catch (err) {
    console.log(err);
    return res.status(500).send("Internal Server Error!");
  }
};

const updateCar = async (req, res) => {
  try {
    let cars = await read("data.json");
    const carId = Number(req.params.id);
    const newData = req.body;

    cars = cars.map((car, index) => {
      if (index === carId) {
        return {
          ...car,
          ...newData,
        };
      }

      return car;
    });

    await write("data.json", cars);
    return res.status(200).send("Car updated successfully!");
  } catch (err) {
    console.log(err);
    return res.status(500).send("Internal Server Error!");
  }
};

const deleteCar = async (req, res) => {
  try {
    const carId = Number(req.params.id);
    let cars = await read("data.json");

    cars = cars.filter((_, index) => index !== carId);

    await write("data.json", cars);
    return res.status(200).send("Car deleted successfully!");
  } catch (err) {
    console.log(err);
    return res.status(500).send("Internal Server Error!");
  }
};

module.exports = {
  getCars,
  createCar,
  updateCar,
  deleteCar,
};

// const { getCars } = require(patekaOdFajlot)
