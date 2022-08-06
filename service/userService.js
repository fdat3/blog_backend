const { User } = require("../models");

const userService = {
  getList: async () => {
    return await User.findAndCountAll();
  },

  getItem: async (id) => {
    return await User.findByPk(id);
  },

  create: async (params) => {
    return User.create(params);
  },

  update: async (id, params) => {
    const findItem = await User.findByPk(id);

    if (!findItem) {
      throw new Error("Cannot find resource");
    }

    await findItem.update({
      ...params,
    });

    return findItem;
  },

  delete: async (id) => {
    return await User.destroy({
      where: {
        id,
      },
    });
  },
};

module.exports = userService;
