
module.exports = {
  host: 'localhost',
  port: 8081,
  public: '../public/',
  paginate: {
    default: 10,
    max: 50
  },
  authentication: {
    entity: 'user',
    service: 'users',
    secret: 'swATvVyZFpGiIBz1jQlqX56iLHI=',
    authStrategies: [
      'jwt',
      'local'
    ],
    jwtOptions: {
      header: {
        'typ': 'access'
      },
      audience: 'https://elparah.store',
      issuer: 'elp-fake-api',
      algorithm: 'HS256',
      expiresIn: '1d'
    },
    local: {
      usernameField: 'user',
      passwordField: 'password'
    },
  },
  postgres: {
    client: 'pg',
    connection: {
      host: process.env.DB_HOST,
      database: process.env.DB_NAME,
      password: process.env.DB_PASSWORD,
      user: process.env.DB_USER
    }
  }
};
