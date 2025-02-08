const mongoose = require("mongoose");
const validator = require("validator");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
    minlength: 4,
  },
  email: {
    type: String,
    required: true,
    validate: [validator.isEmail, "Invalid email format"],
  },
  phone: {
    type: String,
    required: true,
    validate: {
      validator: function (v) {
        return /^1-\d{3}-\d{3}-\d{4}$/.test(v);
      },
      message: "Invalid phone format (should be 1-DDD-DDD-DDDD)",
    },
  },
  website: {
    type: String,
    required: true,
    validate: [validator.isURL, "Invalid website URL"],
  },
  address: {
    street: { type: String, required: true },
    suite: { type: String, required: true },
    city: {
      type: String,
      required: true,
      validate: {
        validator: function (v) {
          return /^[a-zA-Z\s]+$/.test(v);
        },
        message: "City name can only contain alphabets and spaces",
      },
    },
    zipcode: {
      type: String,
      required: true,
      validate: {
        validator: function (v) {
          return /^\d{5}-\d{4}$/.test(v);
        },
        message: "Invalid ZIP format (should be DDDDD-DDDD)",
      },
    },
    geo: {
      lat: { type: String, required: true },
      lng: { type: String, required: true },
    },
  },
  company: {
    name: { type: String, required: true },
    catchPhrase: { type: String, required: true },
    bs: { type: String, required: true },
  },
});

module.exports = mongoose.model("User", UserSchema);
