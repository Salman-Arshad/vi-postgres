import pg from "pg-promise";

const initOptions = {
	/* initialization options */
};
const pgp = pg(initOptions);

const cn = {
	host: "drill",
	port: 5432,
	database: "defaultdb",
	user: "postgres",
	password: "example",
	max: 30, // use up to 30 connections

	// "types" - in case you want to set custom type parsers on the pool level
};

let db = pgp(cn);
//  db.query("SELECT * FROM ldb.ldb_clients LIMIT 10;").then(console.log);

export const getData = async () => {
	return db.query("SELECT * FROM ldb.ldb_cron_job LIMIT 10;");
};
export const closeConnection = () => {
	pgp.end();
};
