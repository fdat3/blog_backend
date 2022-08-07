const { Setting } = require("../models");

const settingService = {
    getList: async () => {
        return await Setting.findAndCountAll();
    },

    getItem: async (id) => {
        return await Setting.findByPk(id);
    },

    create: async (params) => {
        const ENV = process.env.NODE_ENV || "development";

        const body = {
            level: ENV === "development" ? "debug" : "info",
            message: JSON.stringify(params),
            rawJson: params,
            method: params.method,
            status_code: params["status-code"],
            session_id: params.session_id,
            original_url: params.original_url,
        };

        return Setting.create(body);
    },

    update: async (id, params) => {
        const findItem = await Setting.findByPk(id);

        if (!findItem) {
            throw new Error("Cannot find resource");
        }

        await findItem.update({
            ...params,
        });

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
