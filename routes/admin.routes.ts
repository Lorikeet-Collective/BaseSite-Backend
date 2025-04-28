import { Router } from "express";
import accountController from "../controllers/account.controller";
import authenticateJWT from "../config/jwt.auth";

const router: Router = Router();

// All admin routes are prefixed with /admin
router.use("/admin", [
  router.get("/list", authenticateJWT, accountController.listAll),
  router.post("/login", accountController.login),
  router.post("/logout", accountController.logout),
]);

export default router;
