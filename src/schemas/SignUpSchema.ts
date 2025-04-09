import { z } from "zod";

export const userNameValidation = z
  .string()
  .min(2, "username must be atlest 2 char")
  .max(20, "usernmae must be less then 20 char")
  .regex(/^[a-zA-Z0-9]+$/, "userName should not contain any special char");

export const signUpSchema = z.object({
  userName: userNameValidation,
  email: z.string().email({ message: "the email is not vaild" }),
  password: z.string().min(6, "pasword must be atlest 6 char"),
});
