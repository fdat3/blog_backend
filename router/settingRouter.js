const express = require("express");

const { settingController } = require("../controller");

const router = express.Router();

router.get("/", async (req, res) => {
    const result = await settingController.getName();

    res.json({
        result,
    });
});

router.get("/:id", async (req, res) => {
    const result = await settingController.getID(req.params.id);

    res.json({
        result,
    });
});

router.post("/", async (req, res) => {
    const result = await settingController.create(req.body);

    res.json({
        result,
    });
});

router.put("/", async (req, res) => {
    const result = await settingController.update(req.params.id, req.body);

    res.json({
        result,
    });
});

router.delete("/:id", async (req, res) => {
    const result = await settingController.delete(req.params.id);

    res.json({
        result,
    });
});

module.exports = router;
