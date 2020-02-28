// Update with your config settings.

module.exports = {

  client: "sqlite3", // specifying  the DBMS
	useNullAsDefault: true, // A flag required for SQLite
	connection: {
		filename: "./data/produce.db3", // location of our database file
	},
  
};
