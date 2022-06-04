import authConfig from "../../config/auth";
import { promisify } from "util";
import jwt from "jsonwebtoken";

export default async (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(401).json({ error: "token not provided" });
  }
  const [prefix, token] = authorization.split(" ");
  if (prefix !== "Bearer") {
    return res.status(401).json({ error: "badly formatted token" });
  }

  try {
    const { id } = await promisify(jwt.verify)(token, authConfig.secret);
    req.userId = id;
    next();
  } catch (error) {
    res.status(401).json({ error: "invalid token" });
  }
};
