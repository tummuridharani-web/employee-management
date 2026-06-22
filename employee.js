const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    employeeId: {
      type: String,
      required: true,
      unique: true
    },
    department: {
      type: String,
      required: true
    },
    designation: {
      type: String,
      required: true
    },
    salary: {
      type: Number,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    phone: {
      type: String,
      required: true
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Employee", employeeSchema);
