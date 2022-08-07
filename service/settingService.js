const { Setting } = require("../models");

const settingService = {
    getName: async () => {},

    getItem: async (id) => {},

    create: async (params) => {
        return Setting.create(body);
    },

    update: async (id, params) => {
        return findItem;
    },

    delete: async (id) => {
        return await Setting.destroy({
            where: {
                id,
            },
        });
    },
};

module.exports = settingService;
