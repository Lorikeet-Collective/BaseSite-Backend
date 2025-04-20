import type { Response } from "express";
import { Router } from "express";
import accountController from "../controllers/account.controller";

const router: Router = Router();

// All admin routes are prefixed with /admin
router.use("/admin", [
  router.get("/", async (_, res: Response): Promise<void> => {
    res.json({ message: "Hello Admins!" });
  }),
  router.get("/list", accountController.listAll),
]);

export default router;
