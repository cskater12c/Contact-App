const mongoose = require("mongoose");
const contactSchema = mongoose.Schema({
  //Can change the required: true to false or remove it so that the field is not required to submit data
  _id: mongoose.Schema.Types.ObjectId,
  name: { type: String },
  phone: { type: String },
  address: { type: String },
  email: { type: String }
});

module.exports = mongoose.model("Contact", contactSchema);
