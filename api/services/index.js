const UserService = require("./UserService")
const GameService = require("./GameService")

module.exports = (db) =>
{
    const userService = new UserService(db);
    const gameService = new GameService(db);

    return { userService, gameService };
}