const userRouter = require("./userRouter");
const employeeRoute = require("./employeeRouter");
const authRouter = require("./authRouter");
const settingRoute = require("./settingRouter");
const themeRoute = require("./themeRouter");
const blogRoute = require("./blogRouter")
const commentRoute = require("./commentRouter");
const likeRoute = require("./likeRouter")

module.exports = {
    userRouter,
    employeeRoute,
    authRouter,
    settingRoute,
    themeRoute,
    blogRoute,
    commentRoute,
    likeRoute
};
