const crudBaseService = require("./crudBaseService");
const userService = require("./userService");
const employeeService = require("./employeeService");
const authService = require("./authService");
const settingService = require("./settingService");
const logService = require("./logService");
const themeService = require("./themeService");
const blogService = require("./blogService");
const commentService = require("./commentService");
const likeService = require("./likeService")

module.exports = {
    crudBaseService,
    userService,
    employeeService,
    logService,
    settingService,
    authService,
    themeService,
    blogService,
    commentService,
    likeService,
};
