const UserService = require("./UserService")
const GameService = require("./GameService")
const WorkshopService = require("./WorkshopService")

module.exports = (db) =>
{
    const userService = new UserService(db);
    const gameService = new GameService(db);
    const workshopService = new WorkshopService(db)

    return { userService, gameService, workshopService };
}