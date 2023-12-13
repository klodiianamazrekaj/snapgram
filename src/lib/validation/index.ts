import * as z from "zod";

export const SignupValidation = z.object({
    name: z.string().min(5, {message: 'Too short. Name must be at least 5 characters'}),
    username: z.string().min(5, {message: 'Too short. Username must be at least 5 characters'}),
    email: z.string().email(),
    password: z.string().min(8, {message: 'Password must be at least 8 characters'})
  });