const errorMiddleware = (err, req, res, next) => {
    console.log('errorMiddleware')
    console.log(err)
    res.status(500).json({
        message: err.message || "Something went wrong",
        stack: err.stack,
    });
}

module.export = errorMiddleware;