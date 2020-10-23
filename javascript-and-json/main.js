var books = [{ title: '1984', author: 'George Orwell', isbn: 1234 },
  { title: 'Goosebumps', author: 'R.L.Stein', isbn: 4321 },
  { title: 'Lord of the Flies', author: 'William Golding', isbn: 2341 }];

console.log('array of books', books);
console.log('type of book array', typeof books);

var jsonString = JSON.stringify(books);
console.log('JSON format:', jsonString);
console.log('type of JSON format:', typeof jsonString);

var studentString = '{"Name": "Phillip", "Number id": 12345}';
console.log('student string:', studentString);
console.log('type of studentString:', typeof studentString);

var parsed = JSON.parse(studentString);
console.log('parsed version:', parsed);
console.log('type of parsed version:', typeof parsed);
