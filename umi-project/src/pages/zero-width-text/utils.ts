//
export const zeroPad = (num: any) => '00000000'.slice(String(num).length) + num;

export const textToBinary = (username: any) =>
  username
    .split('')
    .map((char: any) => zeroPad(char.charCodeAt(0).toString(2)))
    .join(' ');

export const binaryToText = (string: any) =>
  string
    .split(' ')
    .map((num: any) => String.fromCharCode(parseInt(num, 2)))
    .join('');

export const binaryToZeroWidth = (binary: any) =>
  binary
    .split('')
    .map((binaryNum: any) => {
      const num = parseInt(binaryNum, 10);
      if (num === 1) {
        return '​'; // zero-width space
      } else if (num === 0) {
        return '‌'; // zero-width non-joiner
      }
      return '‍'; // zero-width joiner
    })
    .join(''); // zero-width no-break space

export const zeroWidthToBinary = (string: any) =>
  string
    .split('')
    .map((char: any) => {
      // zero-width no-break space
      if (char === '​') {
        // zero-width space
        return '1';
      } else if (char === '‌') {
        // zero-width non-joiner
        return '0';
      }
      return ' '; // add single space
    })
    .join('');
