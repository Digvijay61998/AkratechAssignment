export default () => ({
  port: parseInt(process.env.PORT, 10) || 4000,
  database: {
    url: process.env.MONGO_URI || "mongodb://localhost:27017/digvijay",
  },
  jwt: {
    secret: process.env.JWT_SECRET || "secretKey",
    signOptions: {
      expiresIn: process.env.JWT_EXPIRES_IN || "30m",

      issuer: process.env.JWT_ISSUER || "chatbot",
    },
    refreshExpiresInDays: process.env.JWT_REFRESH_EXPIRES_IN_DAYS || 7,
  },

});
