const path = require('path');
const dotenv = require('dotenv');

// Carrega o .env principal
dotenv.config({ path: path.resolve(process.cwd(), '.env') });

// Decide qual arquivo de ambiente carregar do arquivo .env (development ou production)
const currentEnv = process.env.APP_ENV || 'development';
dotenv.config({ path: path.resolve(process.cwd(), `.env.${currentEnv}`) });

// Exporta as configs já resolvidas
module.exports = {
  env: currentEnv,
  app: {
    port: process.env.APP_PORT || 3000,
  },
  db: {
    client: process.env.DB_CLIENT,
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  },
  jwt: {
    secret: process.env.JWT_SECRET || 'e067e0babbf8401329c86f17ef41ae589764a9837b0b10785ca566390332feba81c5487759d01caf0e7d132b45a99a5a6e7b6b8084d47151ae167f5182e9853e',
    expiresIn: process.env.JWT_EXPIRES_IN || '15m',
  },
};