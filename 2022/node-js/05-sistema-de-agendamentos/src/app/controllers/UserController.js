import User from "../models/User";

class UserController {
  async store(req, res) {
    const userExists = await User.findOne({ where: { email: req.body.email } });
    if (userExists) {
      return res.status(400).json({ error: "User already exists" });
    }
    const { id, name, email, provider } = await User.create(req.body);
    res.json({ id, name, email, provider });
  }

  async update(req, res) {
    res.json({ message: req.userId });
  }
}

export default new UserController();
