const express = require("express");

const {
  addEmployee,
  getEmployees,
  searchEmployee,
  updateEmployee,
  deleteEmployee,
} = require("../controllers/employeeController");

const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/", protect, addEmployee);

router.get("/", protect, getEmployees);

router.get("/search", protect, searchEmployee);

router.put("/:id", protect, updateEmployee);

router.delete("/:id", protect, deleteEmployee);

module.exports = router;