import {readFile} from "fs/promises";

export const parse = async () => {
    let filename: string = "vi.json";
    let config = JSON.parse(await readFile(filename, {encoding: "utf-8"}));
};
