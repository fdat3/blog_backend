const {Employee} = require('../models');

const authService = {
    employeeLogin: async ({username, password}) => {
        console.log({username, password});
        const findEmployee = await Employee.scope('withPassword').findOne({
            where: {
                username
            },

        });
        console.log(findEmployee);

        if (!findEmployee) {
            throw new Error('Employee not found');
        }

        if (findEmployee.password !== password) {
            throw new Error('Password is incorrect');
        }

        return findEmployee
    }
}

module.exports = authService;