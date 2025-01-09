import { userService } from "../../services";
import { errorHandlerWrapper } from "../../utils";
import { generateToken } from "../../utils/generate";
import { comparePassword } from "../../utils/password";
import httpStatus from "http-status";

const logoutHandler = async (req, res) => {  
  res.clearCookie('token');  
  res.clearCookie('user');  
  res.json({ Status: 'success' });  
};

export const logoutController = errorHandlerWrapper(logoutHandler);
