import { SQLiteDatabase } from "expo-sqlite";
import { getDBConnection } from "../services/dbService";
import { Post } from "../types/posts";

const tableName = "posts";

export const createTable = async (db: SQLiteDatabase) => {
  const query = `CREATE TABLE IF NOT EXISTS ${tableName}(
          id INTEGER PRIMARY KEY NOT NULL,
          value TEXT NOT NULL
      );`;
  await db.execAsync(query);
};

// Create
const createNewPostInDb = async (postContent: string) => {
  try {
    const db = await getDBConnection();
    await createTable(db);
    const createStatementSql = `INSERT INTO ${tableName} (value) VALUES ('${postContent}')`;
    await db.execAsync(createStatementSql);
  } catch (error) {
    console.error(error);
  }
};

// Read
const getAllPostsFromDb = async (): Promise<Post[] | []> => {
  try {
    const db = await getDBConnection();
    await createTable(db);
    const selectStatementSql = `SELECT * FROM ${tableName}`;
    const results = await db.getAllAsync(selectStatementSql);
    return results as Post[];
  } catch (error) {
    console.error(error);
    return [];
  }
};

export { createNewPostInDb, getAllPostsFromDb };
