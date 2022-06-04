import bcryptjs from "bcryptjs";
import { Model, DataTypes } from "sequelize";

class User extends Model {
  static init(sequelize) {
    super.init(
      {
        name: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.VIRTUAL,
        password_hash: DataTypes.STRING,
        provider: DataTypes.BOOLEAN,
      },
      { sequelize }
    );
    this.addHook("beforeCreate", async (user) => {
      if (user.password) {
        user.password_hash = await bcryptjs.hash(user.password, 10);
      }
    });
  }
}

export default User;
