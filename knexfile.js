// Update with your config settings.

module.exports = {
  development: {
    client: "mysql2",
    connection: {
      database: "send_me",
      user: "root",
      password: "l3xm4rk3",
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
      directory: `${__dirname}/database/migrations`,
    },
    seeds: {
      directory: `${__dirname}/database/seeds`,
    },
  },
};
