const text = 'my name is Jun';

console.log(text);
console.log(text.indexOf('n'));
console.log(text.lastIndexOf('n'));

console.log(text.includes('is'));

console.log(text.startsWith('My'));
console.log(text.startsWith('my'));

console.log(text.toUpperCase());
console.log(text);
console.log(text.toLowerCase());

const num = '0123456789'
console.log(num.substring(1, 4));  // 몇 번째 index부터 몇자리까지 가져오기
console.log(text.slice(3));         // n번째 index까지 잘라내기
console.log(text.slice(-3));

const space = '         space     ';
console.log(space.trim());          // 공백 제거하고 문자열만 출력

const longText = 'Get to the point !';
console.log(longText.split(' '));
console.log(longText.split(' ', 2));
