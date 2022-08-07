const express = require("express");

const { authController } = require("../controller");
const asyncHandler = require('express-async-handler')

const router = express.Router();

router.get("/", async (req, res) => {

});

router.get("/:id", async (req, res) => {

});

router.post("/", async (req, res) => {

});

router.put("/:id", async (req, res) => {

});

router.delete("/:id", async (req, res) => {

});

router.post('/employee-login', asyncHandler(async (req, res) => {
    const {username, password} = req.body;

    const result = await authController.employeeLogin({username, password});

    res.json({
        result,
    })
}))

module.exports = router;
