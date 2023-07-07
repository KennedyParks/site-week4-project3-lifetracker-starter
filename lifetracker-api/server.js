
//Imports
const express = require("express");
const app = express(); 
const { NotFoundError } = require("./utils/errors.js");
const security = require("./middleware/security.js");
const cors = require("cors");
const morgan = require("morgan");
const { PORT } = require("./config.js");
const { restart } = require("nodemon");

// middleware
app.use(cors());
app.use(morgan("tiny"));
app.use(express.json());
//For every request, we will check if a user exist or if a token
// is exists in the authorization header
//If it does then attach it to res.locals
app.use(security.extractUserFromJwt);

//Routes
const authRouter = require("./routes/auth.js");
const nutritionRouter = require("./routes/nutrition.js");
app.use("/auth", authRouter);
app.use("/nutrition", nutritionRouter);

//Endpoints
app.get("/", (req, res) => {
  res.status(200).send("Hello World!");
});

app.post("/", (req, res) => {
  console.log(req.body);
  res.send("Good post");
});

//Error handling
app.use((req, res, next) => {
  return next(new NotFoundError());
});

app.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message;

  res.status(status).json({
    error: { message, status },
  });
});

app.listen(PORT, () => {
  console.log(`🚀 Server listening at http://localhost:${PORT}`);
});





// express = require("express");
// const cors = require("cors");
// const morgan = require("morgan");
// const router = require("./routes/auth");
// // const app = require("./app");
// const app = express();
// // import errors here
// //get rid of the app.js
// //use req and res only for the middlewares app.use


// // const PORT = require("./config");
// const port = 3001;
// // const { BadRequestError, NotFoundError } = require("./utils/errors");
// // Enable CORS middleware to handle cross-origin requests
// app.use(cors());
// // Use Morgan middleware for request logging
// app.use(morgan("dev"));
// app.use("/auth", router);
// // Parse incoming requests with JSON payloads
// app.use(express.json());
// // app.use((err, req, res, next) => {
// //   const status = err.status || 500;
// //   const message = err.message;
// //   return res.status(status).json({
// //     error: { message, status },
// //   });
// // });
// //setting up port


// app.listen(port, () => {
//   console.log(`:firecracker: Server listening on port ${port}`);
// });