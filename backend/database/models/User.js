module.exports = (sequelize, DataTypes) => {
  const alias = "User";

  const cols = {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING(255),
    },
    lastname: {
      type: DataTypes.STRING(255),
    },
    email: {
      type: DataTypes.STRING(255),
    },
    profile: {
      type: DataTypes.TEXT,
    },
    rol: {
      type: DataTypes.STRING(20),
    },
    password: {
      type: DataTypes.STRING(100),
    },
  };

  const config = {
    tableName: "users",
  };
  const User = sequelize.define(alias, cols, config);

  return User;
};
