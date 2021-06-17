const knex = require("../database");

module.exports = {
  async getAllPhones(req, res) {
    try {
      const results = await knex("cellphone").select(
        "brand",
        "model",
        "color ",
      );
      res.status(200).send(results);
    } catch (error) {
      res.status(400).send(error);
      
    } finally {
      return res.json({
        message: "Please try again!",
      });
    }
  },

  async insertPhone(req, res) {
    const { brand, model, color, found_at, details, fair_shipp, photos } =
      req.body;
    await knex("cellphone").insert({
      brand,
      model,
      color,
      found_at,
      details,
      fair_shipp,
    });
    return res.status(201).json({
      message: "Cell Phone successfully registered thanks for colaborate <3",
      color: color,
    });
  },
};
