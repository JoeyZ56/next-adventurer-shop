const mongoose = require("mongoose");

require("./Category");

const itemSchema = require("./ItemSchema");

module.exports = mongoose.models.Item || mongoose.model("Item", itemSchema);
// Compare this snippet from src/models/Order.js:
