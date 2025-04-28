import type { Request, Response, NextFunction } from "express";
import Jwt from "jsonwebtoken";

// Bearer Token check of JWT in Authorization header for route protection
const authenticateJWT = (req: Request, res: Response, next: NextFunction) => {
  const token = req.header("Authorization") || "";
  // Token must be split: 'Bearer <token>'
  Jwt.verify(token.split(" ")[1], process.env.SECRET_KEY, (err) => {
    if (err) res.status(401).json({ msg: "Unauthorized", err });
    else next();
  });
};

export default authenticateJWT;
