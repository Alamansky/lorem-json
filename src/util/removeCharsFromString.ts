const removeCharsFromString = (input: string, characters: string[]): string => {
	characters.forEach((char) => {
		input = input
			.split("")
			.filter((c) => c != char)
			.join("");
	});
	return input;
};

export default removeCharsFromString;
