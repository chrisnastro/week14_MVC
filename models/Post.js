const { Model, DataTypes } = require('sequilize');
const sequilize = require('../config/connection');

class Post extends Model { }

Post.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        body: {
            type: DataTypes.String,
            allowNull: false,
        },
    },
    {
        sequilize,
        timestamps: true,
        freezeTableName: true,
        underscored: true,
        modelName: "post",
    }
);

module.exports = Post;