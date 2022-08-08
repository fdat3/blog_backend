const { themeService } = require("../service");

const themeController = {
    getName: async () => {
        return await themeService.getName();
    },
};

module.exports = themeController;
