import mongoose from 'mongoose';

const deviceSchema = new mongoose.Schema(
  {
    name: String,
    type: String,
  },
  { timestamps: true }
);

deviceSchema.index({ name: true });

export default mongoose.model('device', deviceSchema);
