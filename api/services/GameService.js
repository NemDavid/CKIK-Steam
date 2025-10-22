const { BadRequestError, NotFoundError } = require("../errors");

class GameService
{
    constructor(db)
    {
        this.gameRepository = require("../repositories")(db).gameRepository;
    }

    async createGame(game)
    {
        return await this.gameRepository.createGame(game);
    }
}

module.exports = GameService;