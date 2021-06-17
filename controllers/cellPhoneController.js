const knex = require("../database");

module.exports = {
  async getAllPhones(req, res) {
    console.log(req.file);
    try {
      const results = await knex("cellphone").select(
        "brand",
        "model",
        "color "
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
    const { brand, model, color, found_at, details, photos, fair_shipp } =
      req.body;
    const teste = req.body.photos;
    console.log(teste);
    await knex("cellphone").insert({
      brand,
      model,
      color,
      details,
      photos,
      found_at,
      fair_shipp,
    });
    return res.status(201).json({
      message: "Cell Phone successfully registered thanks for colaborate <3",
      color: color,
    });
  },
};
