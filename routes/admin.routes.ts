import type { Response } from "express";
import { Router } from "express";
import { Account } from "../models/account.model";

const router: Router = Router();

// All admin routes are prefixed with /admin
router.use("/admin", [
  router.get("/", async (_, res: Response): Promise<void> => {
    res.json({ message: "Hello Admins!" });
  }),
  router.get("/list", async (_, res: Response): Promise<void> => {
    await Account.find()
      .then((accounts) => {
        res.status(200).json(accounts);
      })
      .catch((err) => {
        res.status(500).json(err);
      });
  }),
]);

export default router;
