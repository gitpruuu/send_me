const knex = require("../database");

module.exports = {
  async getAllPhones(req, res) {
    const results = await knex("cellphone").select("brand", "model", "color ");
    return res.json(results);
  },

  async insertPhone(req, res) {
    const { brand, model, color, found_at, details, fair_shipp } = req.body;
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
      brand: brand,
      color: color,
    });
  },
};
