express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const router = require("./routes/auth");
// const app = require("./app");
const app = express();
// import errors here
//get rid of the app.js
//use req and res only for the middlewares app.use


// const PORT = require("./config");
const port = 3001;
// const { BadRequestError, NotFoundError } = require("./utils/errors");
// Enable CORS middleware to handle cross-origin requests
app.use(cors());
// Use Morgan middleware for request logging
app.use(morgan("dev"));
app.use("/auth", router);
// Parse incoming requests with JSON payloads
app.use(express.json());
// app.use((err, req, res, next) => {
//   const status = err.status || 500;
//   const message = err.message;
//   return res.status(status).json({
//     error: { message, status },
//   });
// });
//setting up port


app.listen(port, () => {
  console.log(`:firecracker: Server listening on port ${port}`);
});