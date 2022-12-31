import pg from "pg-promise";

const initOptions = {
	/* initialization options */
};
const pgp = pg(initOptions);

const cn = {
	host: "localhost",
	port: 5432,
	database: "vi",
	user: "postgres",
	password: "example",
	max: 30, // use up to 30 connections

	// "types" - in case you want to set custom type parsers on the pool level
};

let db = pgp(cn);
//  db.query("SELECT * FROM ldb.ldb_clients LIMIT 10;").then(console.log);

export const getData = async () => {
	return db.query("SELECT * FROM ldb.ldb_lobbyists LIMIT 2;");
};
export const closeConnection = () => {
	pgp.end();
};
