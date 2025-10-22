const { Model, DataTypes } = require("sequelize");

const authUtils = require("../utilities/authUtils");

module.exports = (sequelize) =>
{
    class User extends Model {};

    User.init
    (
        {
            ID:
            {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false,
            },

            name:
            {
                type: DataTypes.STRING,
                allowNull: false,
                unique: "username"
            },

            email:
            {
                type: DataTypes.STRING,
                allowNull: false,
                unique: "email",

                validate:
                {
                    isEmail:
                    {
                        args: true,

                        msg: "Invalid email format",
                    }
                }
            },

            password:
            {
                type: DataTypes.STRING,
                allowNull: false,

                set(value)
                {
                    this.setDataValue("password", authUtils.hashPassword(value));
                },
                validate:{
                    len:{
                        args: [8,Infinity],
                        msg: "Password must be at least 8 characters long",
                    },
                    Alphanumeric(value){
                        let bool = true;
                        for(let i = 0; i < value.length; i++){
                            const char = value[i];
                            if(!((char >= '0' && char <= '9') || (char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z'))){
                                bool = false;
                            }
                        }
                        return bool;
                    }
                }
            },

            /* partialPasswordHash:
            {
                type: DataTypes.VIRTUAL,

                get()
                {
                    return this.getDataValue("password").substring(0, this.getDataValue("password").length / 2);
                },
            }, */

            isAdmin:
            {
                type: DataTypes.BOOLEAN,
                allowNull: false,
                defaultValue: false,
            }
        },

        {
            sequelize,
            modelName: "User",
            createdAt: "registeredAt",
            updatedAt: false,

            scopes:
            {
                public:
                {
                    attributes: [ "name", "email", "registeredAt", "isAdmin" ],

                    include:
                    {
                        association: "orders",

                        attributes: ["product_name", "price", "orderedAt"],
                    }
                },

                admin:
                {
                    where:
                    {
                        isAdmin: true,
                    },
                }
            }
        },
    );

    return User;
}