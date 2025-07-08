import { drizzle } from "drizzle-orm/mysql2";
import mysql from "mysql2/promise";
import dotenv from "dotenv";
import * as schema from "./schema.js";

dotenv.config();

const pool = mysql.createPool(process.env.DATABASE_URL);

export const db = drizzle(pool, { schema, mode: "default" });

(async () => {
  try {
    const conn = await pool.getConnection();
    console.log("✅ MySQL connected!");
    conn.release(); // penting!
  } catch (error) {
    console.error("❌ MySQL connection failed:", error.message);
  }
})();
