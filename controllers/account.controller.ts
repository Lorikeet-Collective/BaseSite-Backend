import type { Response } from "express";
import type { Requests } from "../types";
import Account from "../models/account.model";
import Jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

type LoginReq = Requests.Login;

const accountController = {
  listAll: async (_: unknown, res: Response): Promise<void> => {
    await Account.find()
      .then((accounts) => res.status(200).json(accounts))
      .catch((err) => res.status(500).json(err));
  },
  login: async (req: LoginReq, res: Response): Promise<void> => {
    await Account.findOne({
      username: req.body.username,
    })
      .then(async (account) => {
        if (account) {
          await bcrypt
            .compare(req.body.password, account.password)
            .then((result) => {
              if (result) {
                const token = Jwt.sign(
                  { userId: account._id, clearance: account.clearance },
                  process.env.SECRET_KEY,
                  { expiresIn: 1000 * 60 * 60 }
                );
                res
                  .set("Authorization", `Bearer ${token}`)
                  .status(200)
                  .json({ msg: "Logging In..." });
              } else {
                res
                  .status(400)
                  .json(
                    new Account().invalidate(
                      "password",
                      "Incorrect password.",
                      req.body.password,
                      "Validation"
                    )
                  );
              }
            });
        } else {
          res
            .status(400)
            .json(
              new Account().invalidate(
                "username",
                "Username not found.",
                req.body.username,
                "Validation"
              )
            );
        }
      })
      .catch((err) => {
        res.status(500).json({ msg: "Something went wrong.", err: err });
      });
  },
};

export default accountController;
