import { body } from "express-validator";

export const createTitleValidator = () => {
  return [
    body("title").exists().notEmpty().withMessage("Title is required."),
    body("description").notEmpty().withMessage("Description is required."),
    body("status").notEmpty().withMessage("Status is required."),
    body("due_date").notEmpty().withMessage("Date is required."),
  ];
};
