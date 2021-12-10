import generateString from "./generateString";
import generateNumber from "./generateNumber";

const getValueOptions = (value: string) => {
	let [valueType, valueOptions = "1*1"] = value.split("/");
	let [size = 1, quantity = 1] = valueOptions.split("*");
	return { valueType, size: size, quantity: Number(quantity) };
};

const generateLoremValue = (value: any): any => {
	if (Array.isArray(value)) {
		let expandedArray: any[] = [];
		value.forEach((element) => {
			let { valueType, size, quantity } = getValueOptions(element);
			const arr = new Array(quantity)
				.fill(0, 0, quantity)
				.map((x) =>
					valueType === "string"
						? generateString(size)
						: generateNumber(size)
				);
			expandedArray.push(...arr);
		});
		return expandedArray;
	} else {
		let { valueType, size, quantity } = getValueOptions(value);
		return valueType === "string"
			? generateString(size)
			: generateNumber(size);
	}
};

export default generateLoremValue;
