const { userService } = require("../service");

const userController = {
  getList: async () => {
    return await userService.getList();
  },

  getItem: async (id) => {
    return await userService.getItem();
  },

  create: async (params) => {
    console.log(params);
    return await userService.create(params);
  },

  update: async (id, params) => {
    return await userService.update(id, params);
  },

  delete: async (id) => {
    return await userService.delete(id);
  },
};

module.exports = userController;
