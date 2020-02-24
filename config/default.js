
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
      DB_HOST: process.env.DB_HOST,
      DB_NAME: process.env.DB_NAME,
      DB_PASSWORD: process.env.DB_PASSWORD,
      DB_USER: process.env.DB_USER
    }
  }
};
