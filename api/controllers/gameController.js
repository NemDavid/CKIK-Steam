const db = require("../db");

const { gameService } = require("../services")(db);

exports.createGame = async (req, res, next) => {
  const { title, price } = req.body || {};
  try {
    return res.status(201).json(await gameService.createGame({ title, price }));
  } catch (error) {
    next(error);
  }
};
