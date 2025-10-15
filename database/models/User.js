module.exports = (sequelize, DataTypes) => {

    const alias = 'User';

    const cols = {
            id: {
                primaryKey: true,
                type: DataTypes.INTEGER.UNSIGNED,
            },
            name: {
                type: DataTypes.STRING(255)
            },
            email: {
                type: DataTypes.STRING(255)
            },
            profile: {
                type: DataTypes.TEXT
            },
            rol: {
                type: DataTypes.STRING(20)
            },
            password: {
                type: DataTypes.STRING(100)
            }
    }

    const config = {
        tableName: 'users',
        timestamps: false
    }
    const User = sequelize.define(alias, cols, config)

    return User;

}