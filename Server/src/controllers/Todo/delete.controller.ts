import { todoService } from "../../services";
import { errorHandlerWrapper } from "../../utils";

const deleteHandler = async (req, res) => {
  const { id } = req.params;
  const ret = await todoService.deleteTodoById({
    id,
  });
  res.json({ result: ret ? 'success' : 'failed' });
};

export const deleteController = errorHandlerWrapper(deleteHandler);
