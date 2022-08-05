const express = require("express");

const { userController } = require("../controller");

const router = express.Router();

router.get("/", async (req, res) => {
  const result = await userController.getList();

  res.json({
    result,
  });
});

router.get("/:id", async (req, res) => {
  const result = await userController.getItem(req.params.id);

  res.json({
    result,
  });
});

router.post("/", async (req, res) => {
  const result = await userController.create(req.body);

  res.json({
    result,
  });
});

router.put("/:id", async (req, res) => {
  const result = await userController.update(req.params.id, req.body);

  res.json({
    result,
  });
});

router.delete("/:id", async (req, res) => {
  const result = await userController.delete(req.params.id);

  res.json({
    result,
  });
});

module.exports = router;
