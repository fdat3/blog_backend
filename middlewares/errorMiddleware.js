const errorMiddleware = (err, req, res, next) => {
    console.log('errorMiddleware')
    console.log(err)
    next(err)
    res.status(500).json({
        message: err.message || "Something went wrong",
        stack: err.stack,
    });
}

const asyncHandler = (fn) => {
    return (req, res, next) => {
        Promise.resolve(fn(req, res, next))
            .catch(next);
    }
}

module.exports = {
    errorMiddleware,
    asyncHandler
};