import { Router } from "express";
import { TitleValidator } from "../validators";
import { TodoController } from "../controllers";
import { checkAuth } from "../utils";

export const todoRouter = Router();

// GET /api/v1/todos - to retrieve all todo items for the authenticated user.
todoRouter.get(
  "/",  
  checkAuth,
  TodoController.getController
);

// POST /api/v1/todos - to create a new todo item || to update an existing todo item.
todoRouter.post(
  "/",
  checkAuth,
  TitleValidator.createTitleValidator(),
  TodoController.registerController
);

// DELETE /api/v1/todos/{id} - to delete a todo item.
todoRouter.delete(
  "/:id",
  checkAuth,
  TodoController.deleteController
);

todoRouter.get(
  "/find/:id",  
  checkAuth,
  TodoController.findController
);
