const { settingService } = require("../service");

const settingController = {
    getName: async () => {
        return await settingService.getName();
    },
    getID: async (id) => {
        return await settingService.getID(id);
    },
    create: async (params) => {
        return await settingService.create(params);
    },
    update: async (id, params) => {
        return await settingService.update(id, params);
    },
    delete: async (id) => {
        return await settingService.delete(id);
    },
};

module.exports = settingController;
