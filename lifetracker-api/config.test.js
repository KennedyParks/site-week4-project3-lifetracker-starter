// require("dotenv").config()
// require("colors")

const PORT = process.env.PORT ? Number(process.env.PORT) : 3001;
const NODE_ENV = process.env.NODE_ENV ? process.env.NODE_ENV : "test";
const IS_TESTING = NODE_ENV === "test";

// module.exports = { PORT, NODE_ENV };

module.exports = {
  PORT,
  NODE_ENV,
  IS_TESTING
};



/*
// require("dotenv").config()
// require("colors")

// const PORT = process.env.PORT ? Number(process.env.PORT): 3001
// const NODE_ENV = process.env.NODE_ENV ? process.env.NODE_ENV : "test"

// module.exports = {PORT, NODE_ENV
// }
*/