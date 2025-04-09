import mongoose, { Schema, Document } from "mongoose";

export interface Message extends Document {
  content: string;
  createdAt: Date;
}

const MessageSchema: Schema<Message> = new Schema({
  content: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    required: true,
    default: Date.now,
  },
});

export interface User extends Document {
  userName: string;
  email: string;
  password: string;
  verifyCode: string;
  isVerifyFeild: boolean;
  verifyCodeExpiary: Date;
  isMessageAccepting: boolean;
  message: Message[];
}

const UserSchema: Schema<User> = new Schema({
  userName: {
    type: String,
    required: [true, "user name is required"],
    trim: true,
    unique: true,
  },
  email: {
    type: String,
    required: [true, "email is required"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "password is required"],
  },
  verifyCode: {
    type: String,
    required: [true, "verifyCode is required"],
  },
  isVerifyFeild: {
    type: Boolean,
    default: false,
  },
  verifyCodeExpiary: {
    type: Date,
    required: [true, "verifyCodeExpiary is required"],
  },
  isMessageAccepting: {
    type: Boolean,
    default: true,
  },
  message: [MessageSchema],
});

const UserModel =
  (mongoose.models.User as mongoose.Model<User>) ||
  mongoose.model<User>("User", UserSchema);

export default UserModel;
