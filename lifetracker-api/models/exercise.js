// const db = require("../db");
// const { BadRequestError, UnauthorizedError, NotFoundError } = require("../utils/errors");

// class Exercise {
//   /**
//    * create/add exercise method
//    * @param {*} user to access the user personal information as email
//    * @param {*} data to access the users input values from the exercise table: name, category, duration and intensity
//    * @returns an object with the new user inputted values
//    */
//   static async addExercise({ user, data }) {
//     const requiredFields = ["name", "category", "duration", "intensity"];
//     requiredFields.forEach((field) => {
//       if (!data.hasOwnProperty(field)) {
//         throw new BadRequestError(`Missing ${field} in request body.`);
//       }
//     });
//     const results = await db.query(
//       `INSERT INTO exercise (
//         name,
//         category,
//         duration,
//         intensity,
//         user_id
//       )
//       VALUES ($1, $2, $3, $4, (SELECT id FROM users WHERE users.email = $5))
//       RETURNING id,
//                 name,
//                 duration,
//                 intensity,
//                 user_id,
//                 created_at
//     `,
//       [data.name, data.category, data.duration, data.intensity, user.email]
//     );
//     return results.rows[0];

//     // const query = `INSERT INTO  exercise (
//     //   name,
//     //   category,
//     //   duration,
//     //   intensity,
//     //   user_id
//     //   )
//     //   VALUES ($1, $2, $3, $4, (SELECT id FROM users WHERE email = $5))
//     //   RETURNING id,
//     //             name,
//     //             duration,
//     //             intensity,
//     //             user_id,
//     //             created_at`;

//     // const result = await db.query(query, [data.name, data.category, data.duration, data.intensity, user.email]);
//     // return result.rows[0];
//   }

//   /**
//    *
//    * @param {*} user parameter to access the users email and its list of exercise
//    * @returns an object of all the user inputted values on the past sorted by date created
//    */

//   static async listAllExercise(user) {
//     const query = `
//     SELECT name, category, duration, intensity
//     FROM exercise 
//     WHERE user_id = (SELECT id FROM users WHERE users.email = $1) 
//     ORDER BY created_at ASC
//     `;

//     const result = await db.query(query, [user.email]);

//     return result.rows;

//     //   const results = await db.query(
//     //     `
//     //     SELECT name,
//     //           category,
//     //           duration,
//     //           intensity,
//     //           user_id
//     //     FROM exercise
//     //     ORDER BY date_created ASC
//     //     JOIN users ON users.id = exercise.user_id
//     //     `
//     //   );
//     //   return results.rows;
//   }
// }

// // const results = await db.query(
// // SELECT p.id,
// // p.caption,
// // p.image_url AS "imageUrl",
// // p.user_id AS "userId",
// // u.email AS "userEmail",
// // p.created_at AS "createdAt",
// // p.updated_at AS "updatedAt"
// // FROM posts AS p
// // JOIN users AS u ON u.id = p.user_id
// // ORDER BY p.creates at DESC

// //  static async exerciseByID(exerciseById) {
// //     const exercise = SELECT * FROM exercise WHERE
// //       .get("products")
// //       .find({ id: Number(productById) })
// //       .value();
// //     console.log("----->>", product);
// //     return product;
// //   }

// module.exports = Exercise;