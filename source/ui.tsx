import React, { useState, useEffect } from "react";
import { render, Text, Box, useInput ,useApp} from "ink";

export const Counter = () => {
	const {exit} = useApp()
	const [counter, setCounter] = useState(0);
	// console.log(2)
	const _UserInput = () => {
		useInput((input, key) => {
			// console.log({input,key});
			if (input === 'q') {
				exit()
				// Exit program
			}

			if (key.leftArrow) {
				// Left arrow key pressed
			}
		});

		return
	};
	useEffect(() => {
		const timer = setInterval(() => {
			setCounter((previousCounter) => previousCounter + 1);
			clearInterval(timer)
			// clearInterval(timer);
		}, 100);

		return () => {
			clearInterval(timer);
		};
	}, []);

	return (
		<>
			<Box
				justifyContent="center"
				// alignSelf="center"
				width="100%"
				height={10}
				borderStyle="bold"
				borderColor="cyanBright"
			>
				{/* <Box marginLeft={20}> */}
				<Text color="green">{counter} tests passed</Text>
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
