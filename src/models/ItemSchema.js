const mongoose = require("mongoose");

const { Schema } = mongoose;

const itemSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    image: String,
    category: {
      type: Schema.Types.ObjectId,
      ref: "Category",
    },
    price: { type: Number, required: true, default: 0 },
    description: String,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.models.Item || mongoose.model("Item", itemSchema);
