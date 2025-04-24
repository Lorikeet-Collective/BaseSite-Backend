import type { Response } from "express";
import type { Requests } from "../types";
import Account from "../models/account.model";
import Jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

type LoginReq = Requests.Login;

// General controller used for all admin / account functions
const accountController = {
  listAll: async (_: unknown, res: Response): Promise<void> => {
    await Account.find()
      .then((accounts) => res.status(200).json(accounts))
      .catch((err) => res.status(500).json(err));
  },
  login: async (req: LoginReq, res: Response): Promise<void> => {
    // Check if account exists
    await Account.findOne({
      username: req.body.username,
    })
      .then(async (account) => {
        if (account) {
          // Compare passwords
          await bcrypt
            .compare(req.body.password, account.password)
            .then((result) => {
              if (result) {
                // Sign token on correct password
                const token = Jwt.sign(
                  { userId: account._id, clearance: account.clearance },
                  process.env.SECRET_KEY,
                  { expiresIn: 1000 * 60 * 60 }
                );
                // Send token as header:Bearer
                res
                  .set("Authorization", `Bearer ${token}`)
                  .status(200)
                  .json({ msg: "Logging In..." });
              } else {
                // Send validation error on wrong password
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
          // Send validation error on wrong username
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
        // General catch-all error in the event of a server error
        res.status(500).json({ msg: "Something went wrong.", err: err });
      });
  },
};

export default accountController;
