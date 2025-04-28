import type { Response } from "express";
import { Router } from "express";

const router: Router = Router();

router.get("/", async (_, res: Response): Promise<void> => {
  res.json({ message: "Hello World!" });
});

export default router;
