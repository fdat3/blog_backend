const express = require("express");

const { employeeController } = require("../controller");

const router = express.Router();

router.get("/", async (req, res) => {
  const result = await employeeController.getName();

  res.json({
    result,
  });
});

router.get("/:id", async (req, res) => {
  const result = await employeeController.getID(req.params.id);

  res.json({
    result,
  });
});

router.post("/", async (req, res) => {
  const result = await employeeController.create(req.body);

  res.json({
    result,
  });
});

router.put("/", async (req, res) => {
  const result = await employeeController.update(req.params.id, req.body);

  res.json({
    result,
  });
});

router.delete("/:id", async (req, res) => {
  const result = await employeeController.delete(req.params.id);

  res.json({
    result,
  });
});

module.exports = router;
