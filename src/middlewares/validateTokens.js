import jwt from "jsonwebtoken";
import { SECRECT_TOKEN } from "../config.js";

export const authRequire = (req, res, next) => {
  const { token } = req.cookies;

  if (!token)
    return res
      .status(404)
      .json({ message: "Not token, authorization denied." });

  jwt.verify(token, SECRECT_TOKEN, (err, decode) => {
    if (err) return res.status(404).json({ message: "Invalid token" });
    req.decode = decode;
    next();
  });
};
