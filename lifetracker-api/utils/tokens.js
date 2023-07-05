const jwt = require("jsonwebtoken");

function createUserJwt(user) {
  const secretKey = "your_secret_key"; // Replace with your actual secret key

  const payload = {
    user: {
      id: user.id,
      email: user.email,
    },
  };

  const token = jwt.sign(payload, secretKey, { expiresIn: "1h" });

  return token;
}

module.exports = { createUserJwt };
