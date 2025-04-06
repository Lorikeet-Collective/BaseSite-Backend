import type { Express, Request, Response } from "express";

const routes = (app: Express): void => {
  app.get("/", async (req: Request, res: Response): Promise<void> => {
    res.json({ message: "Hello World!" });
  });
};

export default routes;
