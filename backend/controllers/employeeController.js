const Employee = require("../models/Employee");

const addEmployee = async (req, res) => {
  try {
    const {
      name,
      email,
      department,
      skills,
      performanceScore,
      experience,
    } = req.body;

    const employeeExists = await Employee.findOne({ email });

    if (employeeExists) {
      return res.status(400).json({
        message: "Employee already exists",
      });
    }

    const employee = await Employee.create({
      name,
      email,
      department,
      skills,
      performanceScore,
      experience,
    });

    res.status(201).json(employee);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const getEmployees = async (req, res) => {
  try {
    const employees = await Employee.find();

    res.json(employees);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const searchEmployee = async (req, res) => {
  try {
    const department = req.query.department;

    const employees = await Employee.find({
      department,
    });

    res.json(employees);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const updateEmployee = async (req, res) => {
  try {
    const employee = await Employee.findById(req.params.id);

    if (!employee) {
      return res.status(404).json({
        message: "Employee not found",
      });
    }

    employee.performanceScore =
      req.body.performanceScore || employee.performanceScore;

    const updatedEmployee = await employee.save();

    res.json(updatedEmployee);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const deleteEmployee = async (req, res) => {
  try {
    const employee = await Employee.findById(req.params.id);

    if (!employee) {
      return res.status(404).json({
        message: "Employee not found",
      });
    }

    await employee.deleteOne();

    res.json({
      message: "Employee removed",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  addEmployee,
  getEmployees,
  searchEmployee,
  updateEmployee,
  deleteEmployee,
};