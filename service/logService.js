const {Logging} = require('../models');

const logService = {
    getList: async () => {
        return await Logging.findAndCountAll();
    },

    getItem: async (id) => {
        return await Logging.findByPk(id);
    },

    create: async (params) => {
        const ENV = process.env.NODE_ENV || 'development';

        const body = {
            level: ENV === 'development' ? 'debug' : 'info',
            message: JSON.stringify(params),
            rawJson: params,
            method: params.method,
            status_code: params['status-code'],
            session_id: params.session_id,
            original_url: params.original_url,
        }

        return Logging.create(body);
    },

    update: async (id, params) => {
        const findItem = await Logging.findByPk(id);

        if (!findItem) {
            throw new Error("Cannot find resource");
        }

        await findItem.update({
            ...params,
        });

        return findItem;
    },

    delete: async (id) => {
        return await Logging.destroy({
            where: {
                id,
            },
        });
    },
}

module.exports = logService;