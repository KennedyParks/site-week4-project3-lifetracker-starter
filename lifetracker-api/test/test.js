//imports
const app = express = require("express");
const pool = require("./db");
const bcrypt = require("bcrypt");
const routes = require("./routes/auth");

//import supertest
const request = require("supertest");

app.use(express.json());
app.use("/", routes);


  describe("Routes testing", () =>{

    //beforeAll = Jest hook that runs before all tests
    beforeAll(async () => {
      const hashedPassword = await bcrypt.hash("password", 10);
      await pool.query(
        `INSERT INTO users (email, password, first_name, last_name) VALUES ($1 $2 $3 $4)`,
        ["Test User", "test@example.com", hashedPassword]
      );
    });

    afterAll(async () =>{
        await pool.query("DELETE FROM users WHERE email = $1", [
            "test@example.com",
        ]);
        pool.end();
  });
  //a Jest function that defines an individual test
  it("should register a new user", async ()=> {
    const response = await request(app).post("/register").send({
        name: "Test User",
        email: "john@example.com",
        password: "123456789",
  });

  expect(response.statusCode).toBe(201);
});
});

const PORT = 3001;

app.listen(PORT, () => {
    console.log(`🚀 Server listening at http://localhost:${PORT}`);
  });