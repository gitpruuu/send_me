const knex = require("../database");

module.exports = {
  async getAllPhones() {
    const results = await knex("cellphone");
    return res.json(results);
  },

  async getPhoneById(req, res) {
    const result = await knex("cellphone");
    return res.json(result);
  },
};
