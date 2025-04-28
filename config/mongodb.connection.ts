import type { Environment } from "../types/env";
import { connect } from "mongoose";

const { DATABASE, DB_URI, DB_URI_DEV, NODE_ENV } = process.env as Environment;
// Check if server is in prod or dev
const DB: string = NODE_ENV === "production" ? DB_URI : DB_URI_DEV;

// Main database connection function
const connectToDB = async (): Promise<void> => {
  await connect(`${DB}${DATABASE}`).then(
    // Successful connection
    (onConnect) => {
      const { host, port } = onConnect.connection;
      console.log(`Successfully connected to: ${host} | ${port}`);
    },
    // Failed connection
    (onRejected) => {
      console.log(`Error connecting to database, Reason: ${onRejected}`);
    }
  );
};

export default connectToDB;
