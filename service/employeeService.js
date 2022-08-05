const { Employee } = require("../models");

const employeeService = {
  getName: async () => {
    return await Employee.findAndCountAll();
  },

  getID: async () => {
    return await Employee.findOne({
      where: id,
    });
  },
  create: async (params) => {
    return await Employee.create(params);
  },
  update: async (id, params) => {
    const findEmp = await Employee.findOne({
      where: { id },
    });
    if (!findEmp) {
      throw new Error("Can not find employee");
    }

    await findEmp.update({ ...params });

    return findEmp;
  },
  delete: async (id) => {
    return await Employee.destroy({
      where: {
        id,
      },
    });
  },
};

module.exports = employeeService;
