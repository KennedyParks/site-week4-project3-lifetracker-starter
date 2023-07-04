// Stores token functions
/*
1. create token 
2. Validate token
3. Function to accept user object 
*/
const jwt = require("jsonwebtoken");
const { SECRET_KEY } = require("../config");

const generateToken = (data) =>
  jwt.sign(data, SECRET_KEY, { expiresIn: "24h" });

const validateToken = (token) => {
  try {
    const decoded = jwt.verify(token, SECRET_KEY);
    return decoded;
  } catch (err) {
    return {};
  }
};

const createUserJwt = (user) => {
  const payload = {
    email: user.email,
  };
  return generateToken(payload);
};

const testToken = () => {
  const user = { email: "person@gmail.com" };
  const token = generateToken(user);
  const validatdeToken = validateToken(token);
  console.log("validatedToken", validatdeToken);
};
testToken();

module.exports = {
  generateToken,
  validateToken,
  createUserJwt,
};