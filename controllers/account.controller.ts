import type { Request, Response } from "express";
import Account from "../models/account.model";

const accountController = {
  listAll: async (_: Request, res: Response): Promise<void> => {
    await Account.find()
      .then((accounts) => res.status(200).json(accounts))
      .catch((err) => res.status(500).json(err));
  },
};

export default accountController;
