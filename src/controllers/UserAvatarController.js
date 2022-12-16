const knex = require("../dataBase/knex")
const AppError = require("../utils/AppError")
const DiskStorage = require("../providers/diskStorege")

class UsersAvatarControllers {

  async update(request, response){
    const user_id = request.user.id;
    const avatarFilename = request.file.filename;

    const diskStorage = new DiskStorage

    const user = await knex("users")
    .where({ id: user_id }).first();

    if(!user){
      throw new AppError("somente usuarios autenticados podem alterar o avatar", 401)
    }

    if(user.avatar){
      await diskStorage.deleteFile(user.avatar)
    }

    const filename = await diskStorage.saveFile(avatarFilename);
    user.avatar = filename;

    await knex("users").update(user).where({ id:user_id});

    return response.json(user);

  }


}

module.exports = UsersAvatarControllers