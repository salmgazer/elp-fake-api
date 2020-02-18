
module.exports = {
  host: "localhost",
  port: 3030,
  public: "../public/",
  paginate: {
    default: 10,
    max: 50
  },
  authentication: {
    entity: "user",
    service: "users",
    secret: "swATvVyZFpGiIBz1jQlqX56iLHI=",
    authStrategies: [
      "jwt",
      "local"
    ],
    jwtOptions: {
      header: {
        "typ": "access"
      },
      audience: "https://yourdomain.com",
      issuer: "feathers",
      algorithm: "HS256",
      expiresIn: "1d"
    },
    local: {
      usernameField: "email",
      passwordField: "password"
    },
    oauth: {
      redirect: "/",
      auth0: {
        key: "<auth0 oauth key>",
        secret: "<auth0 oauth secret>",
        subdomain: "<auth0 subdomain>"
      }
    }
  },
  postgres: {
    client: "pg",
    connection: process.env.POSTGRESQLCONNSTR_DB
  }
};
