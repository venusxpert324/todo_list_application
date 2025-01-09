import { todoService } from "../../services";
import { errorHandlerWrapper } from "../../utils";

const findHandler = async (req, res) => {
  const { id } = req.params; 
  const todo = await todoService.getOneTodo({
    id
  });
  res.json({ todo });
};

export const findController = errorHandlerWrapper(findHandler);
