const { Employee, User } = require('../models');
const bcrypt = require('bcryptjs');
const SALT = 10;

const authService = {
    employeeLogin: async ({ username, password }) => {
        const findEmployee = await Employee.scope('withPassword').findOne({
            where: {
                username
            },
        });

        if (!findEmployee) {
            throw new Error('Employee not found', 404);
        }

        const isValid = await this.comparePassword(password, findEmployee.password);
        if (!isValid) {
            throw new Error('Invalid password', 401);
        }

        findEmployee.password = undefined

        return findEmployee
    },
    employeeRegister: async (params) => {
        const { username, password } = params
        // check existing username
        const findEmployee = await Employee.findOne({
            where: {
                username
            },
        });

        if (findEmployee) {
            throw new Error('Username already exists', 404);
        }

        // hash password
        const hashPassword = await this.hashPassword(password);

        return await Employee.create({
            ...params,
            password: hashPassword,
        });
    },
    userInAppLogin: async ({ username, password }) => {
        const findUser = await User.scope('withPassword').findOne({
            where: {
                username
            },
        });

        if (!findUser) {
            throw new Error('User not found');
        }

        const isValid = await this.comparePassword(password, findUser.password);
        if (!isValid) {
            throw new Error('Invalid password');
        }

        findUser.password = undefined;

        return findUser
    },
    userRegister: async (params) => {
        const { username, password } = params
        const findExistUser = await User.findOne({
            where: {
                username
            }
        })

        if (findExistUser) {
            throw new Error('Username already exists');
        }

        const hashPassword = await this.hashPassword(password);

        return await User.create({
            ...params,
            password: hashPassword,
        });
    },

    hashPassword: async (password) => {
        return await bcrypt.hash(password, SALT, async (err, hash) => {
            if (err) {
                throw new Error(err);
            }
            return hash;
        });
    },
    comparePassword: async (password, hash) => {
        return await bcrypt.compare(password, hash, async (err, isMatch) => {
            if (err) {
                throw new Error(err);
            }
            return isMatch;
        });
    }
}

module.exports = authService;