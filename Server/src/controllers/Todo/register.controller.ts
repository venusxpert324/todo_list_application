import { todoService } from "../../services";
import { errorHandlerWrapper } from "../../utils";
import httpStatus from "http-status";

const registerHandler = async (req, res) => {
  const { token, id, title, description, status, due_date } = req.body;  
  if(id != '') { // edit todo
    const todo = await todoService.updateTodo(req.body);
    res.json({ todo });
  } else { // create todo
    const user_id = req.user.uuid;
    const todo = await todoService.createTodo({
      user_id,
      title,
      description,
      status,
      due_date,
    });
    res.json({ todo }).status(httpStatus.CREATED);
  }    
};

export const registerController = errorHandlerWrapper(registerHandler);
