import 'dotenv/config';

const config = {
  port: process.env.PORT || 3000,
  mongoUri: process.env.MONGO_URI,
};

if (!config.mongoUri) {
  console.error('FATAL: MONGO_URI is missing from environment variables.');
  process.exit(1);
}

export default config;
