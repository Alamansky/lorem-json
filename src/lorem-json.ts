#!/usr/bin/env node

import removeCharsFromString from "./util/removeCharsFromString";
import generateLoremValue from "./util/generateLoremValue";
import walkObject from "./util/walkObject";

const input = process.argv[2];

const kvArray = removeCharsFromString(input, ["\u0022", "\u0027"]).split(" ");

let validJsonString = kvArray
	.map((x: string) => {
		let value = x.match(/[a-z]|[0-9]|[\/\*]/gi).join("");
		let quotedValue = x.replace(value, `"${value}"`);
		return quotedValue;
	})
	.join("");

const parsedJson = JSON.parse(validJsonString);

const expandedJson = walkObject(
	(value: string) => generateLoremValue(value),
	parsedJson
);

console.log(JSON.stringify(expandedJson, null, 2));
