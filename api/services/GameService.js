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
}

module.exports = GameService;