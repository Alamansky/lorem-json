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

const generateString = (size: string | number = 1): any => {
	const sizePresets: { [size: string]: number } = {
		xs: 3,
		sm: 5,
		md: 8,
		lg: 15,
		xlg: 20,
	};


	let generatedString = null;

	console.log(size);
	if (typeof size === 'number') {
		generatedString = lorem.generateWords(size);
	} else {
		let category: string = size.slice(0, 1);
		let quantity: number = Number(size.slice(1));
		switch (category) {
			case "w":
				generatedString = lorem.generateWords(quantity);
				break;
			case "s":
				generatedString = lorem.generateSentences(quantity);
				break;
			case "p":
					generatedString = lorem.generateParagraphs(quantity);
					break;
			default:
				generatedString = lorem.generateWords(Number(size));
				break;
		}
	}

	return generatedString;
};

export default generateString;
