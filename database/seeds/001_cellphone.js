exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("cellphone")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("cellphone").insert([
        {
          brand: "Asus",
          model: "Zenfone 5 MAX",
          color: "Azul",
          found_at: "Metrô",
          details: "Broken screen",
          shipping_price: 50,
        },
      ]);
    });
};
