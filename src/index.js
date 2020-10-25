const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {
    const codeBin = {
        '.': 10,
        '-': 11,
    }
    const binMorseTable = { '**********': ' ' };

    // form  binMorseTable:
    for (let key in MORSE_TABLE) {
        let binKey = key
            .split('')
            .map(el => codeBin[el])
            .join('')
            .padStart(10, '0');

        binMorseTable[binKey] = MORSE_TABLE[key];
    }

    // split input in 10 symbols array
    const array10symb = expr.match(/(.{10})/g);

    return array10symb
        .map(el => binMorseTable[el])
        .join('');
}

module.exports = {
    decode
}