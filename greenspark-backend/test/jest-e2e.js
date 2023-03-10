const dotenv = require('dotenv');
dotenv.config({ path: '.env' });
dotenv.config({ path: '.env.test', override: true });

module.exports = {
  "moduleFileExtensions": ["js", "json", "ts"],
  "rootDir": ".",
  "testEnvironment": "node",
  "testRegex": ".e2e-spec.ts$",
  "setupFilesAfterEnv": ["./db.setup.ts"],
  "transform": {
    "^.+\\.(t|j)s$": "ts-jest"
  }
}
