const { authService } = require("../service");

const userController = {
    getList: async () => {
        // return await authService.getList();
    },

    getItem: async (id) => {
        // return await authService.getItem(id);
    },

    create: async (params) => {
        // return await authService.create(params);
    },

    update: async (id, params) => {
        // return await authService.update(id, params);
    },

    delete: async (id) => {
        // return await authService.delete(id);
    },

    employeeLogin: async ({username, password}) => {
        return await authService.employeeLogin({username, password});
    }
};

module.exports = userController;
