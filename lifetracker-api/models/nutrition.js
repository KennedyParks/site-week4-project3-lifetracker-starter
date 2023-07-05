const { UnauthorizedError, BadRequestError } = require("../utils/errors");
const db = require("../db");

class Nutrition {
  static async getNutrition(id) {
    const query = `SELECT * FROM nutrition WHERE id = $1`;
    id = parseInt(id);
    const values = [id];
    console.log(values);
    const result = await db.query(query, values);
    console.log(result.rows);
    return result.rows;
  }


  static async create(nutrition, email) {

    const requiredFields = [
      "name",
      "category",
      "calories",
      "image_url",
    ];
    requiredFields.forEach((field) => {
      if (!nutrition.hasOwnProperty(field)) {
        throw new BadRequestError(`Missing ${field} in request body`);
      }
    });

    const query = `INSERT INTO nutrition (name, category, calories, image_url, user_id) VALUES ($1, $2, $3, $4, (SELECT id FROM users WHERE email=$5 )) RETURNING *`;
    const result = await db.query(query, [
      nutrition.name,
      nutrition.category,
      nutrition.calories,
      nutrition.image_url,
      email,
    ]);
    return result.rows[0];
  }
}

module.exports = Nutrition;