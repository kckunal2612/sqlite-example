import * as SQLite from "expo-sqlite";

export const getDBConnection = async () => {
  return SQLite.openDatabaseAsync("app-data.db");
};
