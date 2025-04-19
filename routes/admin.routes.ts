import type { Response } from "express";
import { Router } from "express";

const router: Router = Router();

// All admin routes are prefixed with /admin
router.use("/admin", [
  router.get("/", async (_, res: Response): Promise<void> => {
    res.json({ message: "Hello Admins!" });
  }),
]);

export default router;
