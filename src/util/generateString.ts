import { LoremIpsum } from "lorem-ipsum";

const lorem = new LoremIpsum({
	sentencesPerParagraph: {
		max: 8,
		min: 4,
	},
	wordsPerSentence: {
		max: 16,
		min: 4,
	},
});

const generateString = (size: string | number = 1) => {
	const sizePresets: { [size: string]: number } = {
		xs: 3,
		sm: 5,
		md: 8,
		lg: 15,
		xlg: 20,
	};
	return typeof size === "number"
		? lorem.generateSentences(size)
		: lorem.generateSentences(sizePresets[size]);
};

export default generateString;
