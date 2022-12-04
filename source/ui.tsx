import React, { useState, useEffect } from "react";
import { render, Text, Box, useInput, useApp, Spacer, Newline } from "ink";
import Divider from "ink-divider";
import Table from "ink-table";

// import * as terminalImage from 'term-img';
import logo from "./logo.png";
import { closeConnection, getData } from "./utils/database";

export const Counter = () => {
	const [rows, setRos] = useState(process.stdout.rows);
	const [cols, setCols] = useState(process.stdout.columns);
	const [data, setData] = useState(null);

	const { exit } = useApp();
	const [counter, setCounter] = useState(0);
	// console.log(2)
	useInput((input, key) => {
		// console.log({input,key});
		if (input === "q") {
			closeConnection()
			exit();
			// Exit program
		}

		if (key.leftArrow) {
			// Left arrow key pressed
		}
	});

	useEffect(() => {
		const enterAltScreenCommand = "\x1b[?1049h";
		const leaveAltScreenCommand = "\x1b[?1049l";
		process.stdout.write(enterAltScreenCommand);
		process.on("exit", () => {
			process.stdout.write(leaveAltScreenCommand);
		});
		getData().then(setData);
		process.stdout.on("resize", () => {
			setCols(process.stdout.columns);
			setRos(process.stdout.rows);
		});

		// const timer = setInterval(() => {
		// 	setCounter((previousCounter) => previousCounter + 1);
		// 	clearInterval(timer);
		// 	// clearInterval(timer);
		// }, 100);

		return () => {
			// clearInterval(timer);
		};
	}, []);

	return (
		<>
			<Box
				justifyContent="center"
				// alignSelf="center"
				width="100%"
				height={rows}
				borderStyle="classic"
				borderColor="cyanBright"
			>
				{/* <Box marginLeft={20}> */}
				{/* {terminalImage(logo)} */}

				{/* <Text color="green">{counter} tests passed</Text> */}
				{data ? <Table data={data} padding={6} /> : <Text></Text>}

				{/* </Box> */}
			</Box>
		</>
	);
};
// const enterAltScreenCommand = "\x1b[?1049h";
// const leaveAltScreenCommand = "\x1b[?1049l";
// process.stdout.write(enterAltScreenCommand);
// process.on("exit", () => {
// 	process.stdout.write(leaveAltScreenCommand);
// });

render(<Counter />);

// syncttiom
