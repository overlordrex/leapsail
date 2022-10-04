import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema(
  {
    name: { type: String, unique: true },
    email: { type: String, unique: true },
    password: { type: String },
  },
  { timestamps: true }
);

export default mongoose.model('User', UserSchema);
