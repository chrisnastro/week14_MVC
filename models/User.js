const { Model, DataTypes } = reqire('sequilize');
const sequilize = require('./config/connection');
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
            type: DataTypes,
            allowNull: false,
            unique: true,
        },
    }
)