const { User } = require("../models");

const userService = {
  getList: async () => {
    return await User.findAndCountAll();
  },

  getItem: async (id) => {
    return await User.findOne({
      where: {
        id,
      },
    });
  },

  create: async (params) => {
    return await User.create(params);
  },

  update: async (id, params) => {
    const findItem = await User.findOne({
      where: {
        id,
      },
    });

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
