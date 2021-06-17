exports.up = (knex) =>
  knex.schema.createTable("cellphone", (table) => {
    table.increments("cell_phone_id");
    table.string("brand", 25).notNullable();
    table.string("model", 25).notNullable();
    table.string("color", 15).notNullable();
    table.string("photos", 150);
    table.text("found_at", 300);
    table.text("details", 300);
    table.float("fair_shipp").notNullable();

    table.timestamp("created_at").defaultTo(knex.fn.now());
    table.timestamp("updated_at").defaultTo(knex.fn.now());
  });

exports.down = (knex) => knex.schema.dropTable("cellphone");
