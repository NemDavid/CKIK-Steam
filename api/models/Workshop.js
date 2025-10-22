const { Model, DataTypes, ValidationError } = require("sequelize");
const Game = require("./Game");
const { version } = require("react");

module.exports = (sequelize) =>
{
    class Workshop extends Model {};

    Workshop.init
    (
        {
            ID:
            {
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4,
                primaryKey: true,
                allowNull: false,
            },
            GameID:
            {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            Name: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            Details : {
                type: DataTypes.TEXT,
            },
            version: {
                type: DataTypes.STRING,
                allowNull: false,
                default: "1.0.0",
            },
            Owner_Id: {
                type: DataTypes.UUID,
                allowNull: false,
            },
            FilePath: {
                type: DataTypes.STRING,
            }
            
        },

        {
            sequelize,
            modelName: "Workshop",
            freezeTableName: true,
            createdAt: "Published_At",
            updatedAt: true,
        }
    );

    return Workshop;
}