/*
-Users
-Games
-Achievements
-Workshop

Users <> Games = N:M
Achievements <> Games = 1:N
Workshop <> Games = 1:N
Users <> Workshop = 1:N
*/

module.exports = (sequelize) =>
{
    const Users = require("./User")(sequelize);
    
    const Games = require("./Game")(sequelize);

    // TODO: N:M games users (library)

    return { Users, Games };
}