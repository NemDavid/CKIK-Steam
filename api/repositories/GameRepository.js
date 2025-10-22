const { DbError } = require("../errors");

const { Op } = require("sequelize");

class GameRepository
{
    constructor(db)
    {
        this.Game = db.Games;

        this.sequelize = db.sequelize;
    }

    async getGames()
    {
        try
        {
            return await this.Game.findAll();
        }
        catch(error)
        {
            throw new DbError("Failed to fetch Games", 
            {
                details: error.message,
            });
        }
    }

    async getGameByID(GameID)
    {
        try
        {
            return await this.Game.findOne(
            {
                where:
                {
                   ID: GameID
                }
            });
        }
        catch(error)
        {
            throw new DbError("Failed to fetch Game", 
            {
                details: error.message,
                data: GameID,
            });
        }
    }

    async createGame(GameData)
    {
        try
        {
            return await this.Game.create(GameData);
        }
        catch(error)
        {
            throw new DbError("Failed to create Game object", 
            {
               details: error.message,
               data: GameData, 
            });
        }
    }

    async deleteGame(GameID)
    {
        try
        {
            return await this.Game.destroy(
            {
                where:
                {
                    ID: GameId
                }
            });
        }
        catch(error)
        {
            throw new DbError("Failed to delete Game from database", { details: error.sqlMessage, data: { GameID } });
        }
    }

    async updateGame(GameData, GameID = GameData.ID)
    {
        try
        {
            return await this.Game.update({ ...GameData }, 
            {
                where:
                {
                    ID: GameID,
                }
            })
        }
        catch(error)
        {
            throw new DbError("Failed to update Game", { details: error.message, data: { GameData } });
        }
    }
}

module.exports = GameRepository;