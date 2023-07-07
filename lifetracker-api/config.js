//Enables loading environment variables from our .env file
require("dotenv").config();
//Enables adding colors to our console.log
// require("colors");

const PORT = process.env.PORT ? Number(process.env.PORT) : 3001;
const IS_TESTING = process.env.NODE_ENV == "test" ? true : false;

// Use dev database, testing database, or via env var, production database
function getDatabaseUri() {
  const dbUser = process.env.DATABASE_USER || "postgres";
  const dbPass = process.env.DATABASE_PASS
    ? encodeURI(process.env.DATABASE_PASS)
    : "postgres";
  const dbHost = process.env.DATABASE_HOST || "localhost";
  const dbPort = process.env.DATABASE_PORT || 5432;
  const dbTestName = process.env.DATABASE_TEST_NAME || "lifetracker_test";
  const dbProdName = process.env.DATABASE_NAME || "lifetracker";
  const dbName = process.env.NODE_ENV === "test" ? dbTestName : dbProdName;

  return (
    process.env.DATABASE_URL ||
    //`postgresql://${dbUser}:${dbPass}@${dbHost}:${dbPort}/${dbName}`
    `postgres://lifetracker_drxj_user:PQ9IhwNkCEveBAHhQXHUN96lFldbzp6n@dpg-cik46a5ph6euh7jnuemg-a/lifetracker_drxj`
  );
}

const BCRYPT_WORK_FACTOR = IS_TESTING ? 1 : 13;

console.log("Lifetracker Config:".red);
console.log("PORT:".blue, PORT);
console.log("Database URI:".blue, getDatabaseUri());
console.log("------".yellow);

module.exports = {
  PORT,
  getDatabaseUri,
  BCRYPT_WORK_FACTOR,
  IS_TESTING,
};











// //Enables loading environment variables from our .env file
// require("dotenv").config();
// //Enables adding colors to our console.log
// require("colors");

// const PORT = process.env.PORT ? Number(process.env.PORT) : 3001;
// const IS_TESTING = process.env.NODE_ENV == "test" ? true : false;

// // Use dev database, testing database, or via env var, production database
// function getDatabaseUri() {
//   const dbUser = process.env.DATABASE_USER || "postgres";
//   const dbPass = process.env.DATABASE_PASS
//     ? encodeURI(process.env.DATABASE_PASS)
//     : "postgres";
//   const dbHost = process.env.DATABASE_HOST || "localhost";
//   const dbPort = process.env.DATABASE_PORT || 5432;
//   const dbTestName = process.env.DATABASE_TEST_NAME || "lifetracker_test";
//   const dbProdName = process.env.DATABASE_NAME || "lifetracker";
//   const dbName = process.env.NODE_ENV === "test" ? dbTestName : dbProdName;

//   return (
//     process.env.DATABASE_URL ||
//     `postgresql://${dbUser}:${dbPass}@${dbHost}:${dbPort}/${dbName}`
//   );
// }

// const BCRYPT_WORK_FACTOR = IS_TESTING ? 1 : 13;

// console.log("Lifetracker Config:".red);
// console.log("PORT:".blue, PORT);
// console.log("Database URI:".blue, getDatabaseUri());
// console.log("------".yellow);

// module.exports = {
//   PORT,
//   getDatabaseUri,
//   BCRYPT_WORK_FACTOR,
//   IS_TESTING,
// };



/*
"use strict"

require("dotenv").config()
require("colors")

const PORT = process.env.PORT ? Number(process.env.PORT) : 3001
const IS_TESTING = process.env.NODE_ENV === "test"

function getDatabaseUri() {
    const dbUser = process.env.DATABASE_USER || "postgres"
    const dbPass = process.env.DATABASE_PASS ? encodeURI(process.env.DATABASE_PASS) : "postgres"
    const dbHost = process.env.DATABASE_HOST || "local"
    const dbPort = process.env.DATABASE_PORT || 5432
    const dbTestName = process.env.DATABASE_TEST_NAME || "lifetracker_test"
    const dbProdName = process.env.DATABASE_NAME || "lifetracker"
    const dbName = process.env.NODE_ENV === "test" ? dbTestName : dbProdName

    return process.env.DATABASE_URL || `postgresql://${dbUser}:${dbPass}@${dbPass}@{dbHost}:${dbPort}/${dbName}`

}

const BCRYPT_WORK_FACTOR = IS_TESTING ? 1 : 13

console.log("Lifetracker Config:".red)
console.log("PORT:".blue, PORT)
console.log("IS_TESTING:".blue, IS_TESTING)
console.log("BCRYPT_WORK_FACTOR".blue, BCRYPT_WORK_FACTOR)
console.log("DATABASE_URI".blue, getDatabaseUri())
console.log("---")

module.exports = {
    PORT,
    IS_TESTING,
    BCRYPT_WORK_FACTOR,
    getDatabaseUri,
}

*/