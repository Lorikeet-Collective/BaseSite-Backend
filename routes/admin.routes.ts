import { Router } from "express";
import accountController from "../controllers/account.controller";

const router: Router = Router();

// All admin routes are prefixed with /admin
router.use("/admin", [
  router.get("/list", accountController.listAll),
  router.post("/login", accountController.login),
  router.post("/logout", accountController.logout),
]);

export default router;
