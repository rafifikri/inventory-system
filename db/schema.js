import { mysqlTable, serial, varchar, datetime } from "drizzle-orm/mysql-core";

export const users = mysqlTable("users", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 100 }).notNull(),
  email: varchar("email", { length: 100 }).notNull().unique(),
  createdAt: datetime("created_at").default(new Date().toISOString()),
});
