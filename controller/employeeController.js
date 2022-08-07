const { employeeService } = require("../service");

const employeeController = {
    getName: async () => {
        return await employeeService.getName();
    },
    getID: async (id) => {
        return await employeeService.getID(id);
    },
    create: async (params) => {
        return await employeeService.create(params);
    },
    update: async (id, params) => {
        return await employeeService.update(id, params);
    },
    delete: async (id) => {
        return await employeeService.delete(id);
    },
};

module.exports = employeeController;
