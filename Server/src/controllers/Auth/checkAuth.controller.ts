import { errorHandlerWrapper } from "../../utils";

const checkAuthHandler = async (req, res) => {
  res.json({ status:"success" });
};

export const checkAuthController = errorHandlerWrapper(checkAuthHandler);
