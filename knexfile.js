// Update with your config settings.

module.exports = {
  client: "sqlite3", //SPECIFYING DBMS DATABASE MANAGEMENT SYSTEM (SQLITE)
	useNullAsDefault: true, // a flag required for SQLite
	connection: {
		filename: "./data/produce1.db3", // location of our database file
	},
};
