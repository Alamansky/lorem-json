const generateNumber = (size: string | number = 1) => {
	return new Array(Number(size))
		.fill(0, 0, Number(size))
		.map((_) => Math.floor(Math.random() * 10))
		.join("");
};

export default generateNumber;
