const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    const exprItems = [];
    const items = [];
    const letters = [];
    let result = ''; 
 
    for (let i = 0; i < expr.length; i += 10) {
      exprItems.unshift((+expr.slice(i, i + 10)) || ' ');
    }
  
    for (let code of exprItems) {
      if (typeof code === 'string') {
        items.push([code]);
        continue;
      }
      
      code = code.toString();
      
      if (code.length > 2) {
        let someItems = [];
        
        for (let i = 0; i < code.length; i += 2) {
          someItems.unshift(code.slice(i, i + 2));
        }
        
        items.push(someItems);
      } else {
        items.push([code]);
      }
    }
  
    items.forEach(item => {
        let letterCode = '';

        item.forEach(n => {
          if (n === ' ') {
            letterCode += ' ';
          } else if (n === '10') {
            letterCode += '.';
          } else {
            letterCode += '-';
          }
        });
         letters.push(letterCode.split('').reverse().join(''));
    });

    letters.reverse().forEach(el => result += MORSE_TABLE[el] || ' ');
    
    return result;
}

module.exports = {
    decode
}