const walkObject = (
	cb: Function,
	base: any,
	returnPrimitives: Boolean = false
) => {
	for (const [key, value] of Object.entries(base)) {
		if (typeof value === "object" && returnPrimitives) {
			walkObject(cb, value);
		} else if (typeof value === "object" && !returnPrimitives) {
			if (Array.isArray(value)) {
				base[key] = cb(value);
			} else {
				walkObject(cb, value);
			}
		} else {
			// if primitive (string or number) has been reached, call cb on value and return
			base[key] = cb(value);
		}
	}
	return base;
};

export default walkObject;
