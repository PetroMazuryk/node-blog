import { body } from "express-validator";

export const registerValidation = [
  body("email", "Невірний формат пошти").isEmail(),
  body("password", "Пароль повинен бути мінімум 5 символів").isLength({
    min: 5,
  }),
  body("fullName", "Вкажи ім'я").isLength({ min: 3 }),
  body("avatarUrl", "невірне посилання на аватарку").optional().isURL(),
];
