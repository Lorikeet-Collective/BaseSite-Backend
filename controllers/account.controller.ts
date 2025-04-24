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
    }).then(async (account) => {
      await bcrypt
        .compare(req.body.password, account!.password)
        .then(async (result) => {
          if (result) {
            const token = Jwt.sign(
              JSON.stringify(account),
              process.env.SECRET_KEY,
              { expiresIn: "1hr" }
            );
            res
              .status(200)
              .cookie("adminToken", token, {
                httpOnly: true,
                secure: true,
                signed: true,
                sameSite: "none",
              })
              .json({ clearanceLevel: account!.clearance });
          }
        });
    });
  },
};

export default accountController;
