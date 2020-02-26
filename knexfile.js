module.exports = {
  development: {
    client: 'pg',
    debug: true,
    connection: {
      host: process.env.DB_HOST,
      database: process.env.DB_NAME,
      password: process.env.DB_PASSWORD,
      user: process.env.DB_USER
    },
    migrations: {
      directory: `${__dirname}/db/migrations`,
    },
  },
  test: {
    client: 'pg',
    debug: false,
    connection: {
      host: process.env.DB_HOST,
      database: process.env.DB_NAME,
      password: process.env.DB_PASSWORD,
      user: process.env.DB_USER
    },
    migrations: {
      directory: `${__dirname}/db/migrations`,
    },
  },
  beta: {
    client: 'pg',
    debug: false,
    pool: {
      min: 2,
      max: 10,
    },
    connection: {
      host: process.env.DB_HOST,
      database: process.env.DB_NAME,
      password: process.env.DB_PASSWORD,
      user: process.env.DB_USER
    },
    migrations: {
      directory: `${__dirname}/db/migrations`,
    },
  },
  qa: {
    client: 'pg',
    debug: false,
    pool: {
      min: 2,
      max: 10,
    },
    connection: {
      host: process.env.DB_HOST,
      database: process.env.DB_NAME,
      password: process.env.DB_PASSWORD,
      user: process.env.DB_USER
    },
    migrations: {
      directory: `${__dirname}/db/migrations`,
    },
  },
  production: {
    client: 'pg',
    debug: false,
    pool: {
      min: 2,
      max: 20,
    },
    connection: {
      host: process.env.DB_HOST,
      database: process.env.DB_NAME,
      password: process.env.DB_PASSWORD,
      user: process.env.DB_USER
    },
    migrations: {
      directory: `${__dirname}/db/migrations`,
    },
  },
};
