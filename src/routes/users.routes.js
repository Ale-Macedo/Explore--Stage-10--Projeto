const { Router } = require("express");
const multer = require("multer");
const uploadConfig = require("../configs/upload");

const UsersControllers = require("../Controllers/UsersControllers");
const UsersAvatarControllers = require("../Controllers/UserAvatarController");
const ensureAuthenticated = require("../middlewares/ensureAuthenticated");

const userRoutes = Router();
const upload = multer(uploadConfig.MULTER);

const usersControllers = new UsersControllers();
const usersAvatarControllers = new UsersAvatarControllers();

userRoutes.post("/", usersControllers.create);
userRoutes.put("/", ensureAuthenticated, usersControllers.update);
userRoutes.patch("/avatar",ensureAuthenticated, upload.single("avatar"), usersAvatarControllers.update)
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