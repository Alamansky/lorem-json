# Lorem JSON

Lorem JSON is a mock data generator that outputs lorem ipsum as a JSON object to the console.

## Installation

1. Clone repo to machine.
```
$ git clone https://github.com/Alamansky/lorem-json.git
```
2. Navigate to project root directory and install node modules.
```
$ cd lorem-json

$ npm install
```
3. In the root directory, run command npm link in the terminal. NOTE: you may need to run this command using the `sudo` keyword, or from a terminal that was opened with the "Run as administrator" option on Windows.
```
$ npm link
```
4. Lorem JSON can now be called with the `lorem-json` command.

## API

Lorem JSON accepts a single argument; a string that defines the properties of the JSON object to be generated. The string is a comma-separated list of key/value pairs in the `key: value` format, much like actual JSON. The whole string must be surrounded in curly brackets and outer quotation marks, but quotation marks surrounding the keys and values are optional.

Keys are written as they will appear in the resulting JSON. Values are written as types (e.g. `string` or `number`), followed by an optional size specification that is declared with the suffix `/n`, where `n` is a whole integer. If the preceding type is `string`, `n` defines the number of lorem ipsum words to be generated. If the preceding type is `number`, it defines the number of digits to be generated.

```
$ lorem-json '{keyName: string/5}'

# generate a JSON object with a keyName property that contains a string of 5 lorem ipsum words

$ lorem-json '{keyName: number/3}'

# generate a JSON object with a keyName property that contains a number with 3 randomly generated digits.

```

If longer strings are desired, prefacing the size option with the character `s` (after the slash but before the number) will specify that sentences should be generated instead of words. Using `p` specifies paragraphs.

```
$ lorem-json '{keyName: string/s3}'

# generate a JSON object with a keyName property that contains a string of 3 lorem ipsum sentences
```

The values of the generated JSON object aren't limited to primitives. Arrays can be declared by surrounding a primitive value (or list of primitive values) with square brackets, then appending `*n` to any primitive value(s) that should be repeated within the array. In this context, The whole integer `n` specifies how many times that primitive value should appear within its containing array.

Nested objects are also supported.

```
$ lorem-json '{keyName: [number/2*5]}'

# generate a JSON object with a keyName property that contains an array of 5 2-digit numbers
```

## Examples

**Example 1: generate JSON object with a `name` property containing 2 words:**

```
$ lorem-json '{name: string/2}'
```

Output:

```
{
  "name": "ipsum tempor"
}
```

**Example 2: generate JSON object with a `name` property containing 2 words, an `age` property containing 2 digits, and a `bio` property containing 3 sentences.**

```
$ lorem-json '{name: string/2, age: number/2, bio: string/s3}'
```

Output:

```
{
  "name": "occaecat reprehenderit",
  "age": "66",
  "bio": "Anim est nisi quis adipisicing anim eu anim nisi elit. Culpa et commodo irure anim sint consequat irure nulla. Tempor in eu elit id ut laborum officia elit aliquip ex id cupidatat amet."
}
```

**Example 3: generate JSON object with an `author` property containing 2 words, and a `posts` property containing an array of 2 posts that are 1 paragraph each.**

```
$ lorem-json '{author: string/w2, posts: [string/p1*2]}'
```

Output:
```
{
  "author": "aliqua consectetur",
  "posts": [
    "Veniam quis incididunt sunt dolor aliqua amet nulla laborum incididunt eu consectetur. Labore culpa laboris esse. Tempor anim labore adipisicing dolor dolor in do nulla irure sit. Ullamco pariatur Lorem quis nisi dolore amet duis nulla do. Consequat excepteur excepteur laboris. Lorem culpa in nulla et et reprehenderit non sint pariatur aliquip adipisicing. Est est deserunt elit.",
    "In anim cillum sunt occaecat sunt ea nisi elit. Duis consectetur enim ex in ex occaecat aliqua mollit voluptate. Ea tempor proident minim culpa et reprehenderit Lorem ea tempor culpa magna. Irure pariatur quis ad aute esse est enim ad. Veniam consequat qui non. Excepteur adipisicing non aute culpa do culpa laboris ullamco aliqua aliqua laborum excepteur non. Ullamco et ullamco adipisicing laboris et in culpa id. Et eu exercitation officia anim esse sunt id dolore."
  ]
}
```

**Example 4: generate JSON object with a `customerId` property containing 7 digits, and an `address` property that contains a nested object with `houseNumber`, `streetName`, `cityName`, `stateName`, and `zipCode` properties.**

```
$ lorem-json '{customerId: number/7, address: {houseNumber: number/3, streetName: word/1, cityName: word/1, stateName: word/1, zipCode: number/5}}'
```

Output:

```
{
  "customerId": "6316515",
  "address": {
    "houseNumber": "732",
    "streetName": "5",
    "cityName": "1",
    "stateName": "5",
    "zipCode": "90910"
  }
}
```
