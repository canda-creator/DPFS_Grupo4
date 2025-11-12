module.exports = (sequelize, DataTypes) => {
  const alias = "Cart";

  const cols = {
    user_id: {
      type: DataTypes.UUID,
      primaryKey: true,
    },
    product_id: {
      type: DataTypes.INTEGER.UNSIGNED,
    },
    quantity: {
      type: DataTypes.INTEGER.UNSIGNED,
    }
  };

  const config = {
    tableName: "cart",
    timestamps: false,
  };
  const Cart = sequelize.define(alias, cols, config);

  return Cart;
};
