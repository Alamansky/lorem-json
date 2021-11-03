const generateNumber = (size: number = 1) => {
	return new Array(size)
		.fill(0, 0, size)
		.map((_) => Math.floor(Math.random() * 10))
		.join("");
};

export default generateNumber;
