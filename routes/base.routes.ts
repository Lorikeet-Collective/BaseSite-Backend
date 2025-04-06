import type { Express, Response } from "express";

const routes = (app: Express): void => {
  app.get("/", async (_, res: Response): Promise<void> => {
    res.json({ message: "Hello World!" });
  });
};

export default routes;
