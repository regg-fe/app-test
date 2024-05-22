import jwt from "jsonwebtoken";
import { SECRECT_TOKEN } from "../config.js";

export const createAccessToken = async (payload) => {
  return new Promise((resolve, reject) => {
    jwt.sign(
      payload,
      SECRECT_TOKEN,
      {
        expiresIn: "1d",
      },
      (err, token) => {
        if (err) reject(err);
        resolve(token);
      }
    );
  });
};
