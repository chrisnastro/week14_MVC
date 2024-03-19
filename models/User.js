const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const bcryptjs = require('bcryptjs');

class User extends Model {
    checkPassword(loginPassword) {
        return bcryptjs.compareSync(loginPassword, this.password);
    }
}

User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true,
            },
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [8],
            },
        },
    },
    {
        hooks: {
            async beforeCreate(newUser) {
                newUser.password = await bcryptjs.hash(newUser.password, 10);
                return newUser;
            },
            async beforeUpdate(updatedUser) {
                updatedUser.password = await bcryptjs.hash(updatedUser.password, 10);
                return updatedUser;
            },
        },
        sequelize,
        timestamps: true,
        freezeTableName: true,
        underscored: true,
        modelName: 'user',
    }
);

module.exports = User;