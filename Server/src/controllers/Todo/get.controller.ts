import { todoService } from "../../services";
import { errorHandlerWrapper } from "../../utils";

const getHandler = async (req, res) => {
  const { uuid } = req.user; 
  const todo_list = await todoService.getAllTodo({
    user_id:uuid
  });
  res.json({ todo_list });
};

export const getController = errorHandlerWrapper(getHandler);
