import { userService } from "../../services";
import { errorHandlerWrapper } from "../../utils";
import { generateToken } from "../../utils/generate";
import { comparePassword } from "../../utils/password";
import httpStatus from "http-status";

const loginHandler = async (req, res) => {
  const { email, password } = req.body;
  const findUser = await userService.getOneUser({ email });
  if (!findUser || findUser.deletedAt) {
      res.json({ status:'no email' });
      return null;
  }
  const compare = await comparePassword(password, findUser.password);
  if (!compare) {
    res.json({ status:'wrong password' });
    return null;
  }
  const token = generateToken(findUser.uuid);
  res.cookie('token', token);
  res.cookie('user', JSON.stringify(findUser));
  res.json({ token, user: findUser }).status(httpStatus.ACCEPTED);
};

export const loginController = errorHandlerWrapper(loginHandler);
