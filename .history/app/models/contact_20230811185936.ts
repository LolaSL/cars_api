import mongoose, { Schema } from "mongoose";

const contactSchema = new Schema({
  fullname: {
    type: String,
    required: [true, "Full name is required."],
    trim: true,
    minLength: [4, "Full name must be larger than 4 characters"],
    maxLength: [30, "Full name must be lesser than 30 characters"],
  },
 phone: {
    type: Number,
    required: [true, "Phone is required."],
    trim: true,
    minLength: [6, "Reg must be larger than 6 characters"],
    maxLength: [50, "Reg must be lesser than 50 characters"],
  },
  reg: {
    type: String,
    required: [true, "Reg is required."],
    trim: true,
    minLength: [6, "Reg must be larger than 6 characters"],
    maxLength: [50, "Reg must be lesser than 50 characters"],
  },
  email: {
    type: String,
    required: [true, "Email is required."],
    match: [/^[\w.%+-]+@[\w.-]+\.[A-Za-z]{2,}$/i, "Invalid email address"],
  },

  message: {
    type: String,
    required: [true, "Message is required."],
  },

  date: {
    type: Date,
    default: Date.now,
  },
});

const Contact =
  mongoose.models.Contact || mongoose.model("Contact", contactSchema);

export default Contact;