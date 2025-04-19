import type { Model } from "mongoose";

enum Clearance {
  readOnly = 0,
  editor = 1,
  admin = 2,
}

declare global {
  namespace Schemas {
    interface Account {
      username: string;
      password: string;
      clearance: Clearance;
      createdAt: number;
      updatedAt: number;
    }
  }
  namespace Models {
    interface Account extends Model<Account> {}
  }
}

export {};
