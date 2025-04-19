import type { Model } from "mongoose";

enum Clearance {
  readOnly = 0,
  editor = 1,
  admin = 2,
}

export namespace Schemas {
  interface Account {
    username: string;
    password: string;
    clearance: Clearance;
    createdAt: number;
    updatedAt: number;
  }
}
export namespace Models {
  interface Account extends Model<Account> {}
}
