import React, {useState, useEffect} from "react";
import {render, Text, Box, useInput, useApp, Spacer, Newline} from "ink";
import Divider from "ink-divider";
import Table from "./Libraries/ink-table";
import TextInput from "ink-text-input";
import rs from "randomstring";

// import * as terminalImage from 'term-img';
import logo from "./logo.png";
import {closeConnection, getData} from "./utils/database";

export const Counter = () => {
    const CustomCell = ({children}: React.PropsWithChildren<{}>) => (
        <Text wrap="wrap" color="cyan">
            {children}
        </Text>
    );
    const CustomSkeleton = ({children}: React.PropsWithChildren<{}>) => <Text color="green">{children}</Text>;
    const [query, setQuery] = useState("");
    const [rows, setRos] = useState(process.stdout.rows);
    const [cols, setCols] = useState(process.stdout.columns);
    const [data, setData] = useState([]);
    const [ready, setReady] = useState(0);
    const [dbCols, setDbCols] = useState([]);
    const [debug, setDebug] = useState("");

    // const [, set] = useState(second)

    const {exit} = useApp();
    const [counter, setCounter] = useState(0);
    const [str, setStr] = useState("");

    // console.log(2)
    useInput((input, _key) => {
        // console.log({input,key});
        if (input === "q") {
            closeConnection();
            exit();
            // Exit program
        }

        // if (input === "e") {

        // 	// Left arrow key pressed
        // }
    });
    useEffect(() => {
        let str = rs.generate(cols - 4);
        setStr(str);
    }, [cols, rows]);
    useEffect(() => {
        // return;
        const enterAltScreenCommand = "\x1b[?1049h";
        const leaveAltScreenCommand = "\x1b[?1049l";
        process.stdout.write(enterAltScreenCommand);
        process.on("exit", () => {
            process.stdout.write(leaveAltScreenCommand);
        });
        setReady(1);
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
    useEffect(() => {
        if (data.length > 0) {
            let keys = Object.keys(data[0] as any);
            // console.log("hello");
            setDebug(JSON.stringify(keys.slice(0, 2)));
            setDbCols(keys.slice(0, 2) as any);
        }
    }, [data]);

    return (
        <>
            {ready ? (
                <Box
                    justifyContent="center"
                    // alignSelf="center"
                    width={cols}
                    height={rows}
                    borderStyle="bold"
                    borderColor="cyanBright">
                    {/* <TextInput value={query} onChange={setQuery} /> */}

                    {/* <Box marginLeft={20}> */}
                    {/* {terminalImage(logo)} */}

                    {/* <Text color="green">{counter}
				tests passed</Text> */}
                    {data && data.length ? (
                        <Table
                            data={data.slice(0,Math.ceil(rows/3))}
                            padding={10}
                            cell={CustomCell}
                            // columns={["first_name", "middle_name", "last_name"]}
                            skeleton={CustomSkeleton}
                            columns={dbCols}
                        />
                    ) : (
                        <Text> Loading.......</Text>
                    )}

                    {/* </Box> */}
                    <Text>{debug}</Text>
                </Box>
            ) : (
                <Text></Text>
            )}
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
