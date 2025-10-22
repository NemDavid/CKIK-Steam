const GameRepository = require("./GameRepository");
const UserRepository = require("./UserRepository");

module.exports = (db) =>
{
    const userRepository = new UserRepository(db); 

    const gameRepository = new GameRepository(db)

    return { userRepository, gameRepository };
}