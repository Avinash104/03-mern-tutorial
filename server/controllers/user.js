import User from "../models/User.js";

const createUser = async (req, res) => {
  //receiving data as json from body of req in postman
  // console.log(req.body)
  try {
    if (!req.body) {
      res.status(400).send("Data fields can't be empty..!");
      return;
    }
    const { username, email, password } = req.body;
    const newUser = new User({ username, email, password });
    const savedUser = await newUser.save();
    res.status(201).json(savedUser); //Sending the json back to frontend
  } catch (err) {
    if (err.message.includes("E11000")) {
      res.status(400).send({error: err.message, reason: "Username already taken"})
    }
    res.status(500).json({ error: err.message });
  }
};

export { createUser };
