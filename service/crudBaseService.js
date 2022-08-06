const { sequelize } = require("../models");
const { Model } = sequelize;

const crudBaseService = {
    getList: async () => {
        return await Model.findAndCountAll();
    },

    getItem: async (id) => {
        return await Model.findOne({
            where: {
                id,
            },
        });
    },

    create: async (params) => {
        return await Model.create(params);
    },

    update: async (id, params) => {
        const findItem = await Model.findOne({
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
        return await Model.destroy({
            where: {
                id,
            },
        });
    },
};

module.exports = crudBaseService;
