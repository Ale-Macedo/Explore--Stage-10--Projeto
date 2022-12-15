const { Router } = require("express");

const UsersControllers = require("../Controllers/UsersControllers")

const userRoutes = Router()

const usersControllers = new UsersControllers()


userRoutes.post("/", usersControllers.create);
userRoutes.put("/:id", usersControllers.update);
module.exports = userRoutes;






























// =============== method get =================
// app.get("/message/:id/:user", (request, response) => {

//   const { id, user } = request.params;

//   response.send(`
//   id of message: ${id}. 
//   for user ${user}
//   `);
// });


// app.get("/user",  (request ,response) => {
//   const{ page, limit } = request.query;

//   response.send(`page ${page}. show: ${limit}`);
// });
// ============================================