import mongoose, { Schema } from 'mongoose';

const UserSchema = new Schema(
  {
    email: {
      type: String,
      unique: true,
    },
    fullName: String,
    avatar: String,
    providerData: {
      uid: String,
      provider: String,
    },
  },
  { timestamps: true },
);

UserSchema.statics.findOrCreate = async function (args) {
  try {
    const user = await this.findOne({
      email: args.email,
      fullName: args.fullName,
    });

    if (!user) {
      return await this.create(args);
    }

    return user;
  } catch (e) {
    return e;
  }
};

export default mongoose.model('User', UserSchema);
