const initOptions = {/* initialization options */ };
const pgp = require('pg-promise')(initOptions);
const { omit } = require('lodash');
const _ = require("lodash")

// const cn = {
// 	host: '192.168.18.6',
// 	port: 5432,
// 	database: 'vi',
// 	user: 'postgres',
// 	password: 'example',
// 	max: 30 // use up to 30 connections

// 	// "types" - in case you want to set custom type parsers on the pool level
// };



// let db = pgp(cn)
// db.query("SELECT * FROM ldb.ldb_clients LIMIT 1;").then((res) => {
// 	a = _.transform(res, (result, obj) => {
// 		let a = _.omit(obj, ["name"])
// 		result.push(_.mapValues(a, b => truncate(b, 20)))
// 	});
// 	console.log(a);
// });



// function truncate(str, len) {

// 	return str && typeof str === "string" ? `${str.substring(0, len)}...` : str
// }


// console.log(truncate("hello Workd", 4))





console.log(__dirname,process.cwd())
