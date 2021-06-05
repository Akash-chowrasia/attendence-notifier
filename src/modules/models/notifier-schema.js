import mongoose from 'mongoose';

const notifierSchema = new mongoose.Schema(
  {
    name: String,
    hook: String,
    is_login: {
      type: Boolean,
      default: false,
    },
    is_logout: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

notifierSchema.index({ name: true });

export default mongoose.model('notifier', notifierSchema);
