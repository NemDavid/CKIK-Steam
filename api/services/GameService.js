const { BadRequestError, NotFoundError } = require("../errors");

class GameService
{
    constructor(db)
    {
        this.gameRepository = require("../repositories")(db).gameRepository;
    }

    async getGames()
    {
        return await this.gameRepository.getGames();
    }

    async createGame(game)
    {
        return await this.gameRepository.createGame(game);
    }
}

module.exports = GameService;