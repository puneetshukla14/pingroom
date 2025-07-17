import mongoose, { Schema } from 'mongoose';

const userSchema = new Schema({
  name: { type: String },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
}, { timestamps: true });

export const User = mongoose.models.User || mongoose.model('User', userSchema);
