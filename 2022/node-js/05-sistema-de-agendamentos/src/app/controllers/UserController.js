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
    const { email, old_password } = req.body;
    const user = await User.findByPk(req.userId);
    if (old_password && !(await user.checkPassword(old_password))) {
      return res.status(400).json({ error: "passwords does not match" });
    }
    if (email && email !== user.email) {
      if (await User.findOne({ where: { email } }))
        return res.status(401).json({ error: "User already exists" });
    }
    const { id, name, provider } = await user.update(req.body);
    res.json({ id, name, provider });
  }
}

export default new UserController();
