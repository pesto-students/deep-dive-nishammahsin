const { Transform } = require('stream');
const fs = require('fs');
const options = {
  delimiter: ',',
  lineEnd: '\n',
  includeHeader: true,
};

let data = '';
let partial = '';
let header = '';
const splitByDelim = (str) => {
  const re = new RegExp(`${options.delimiter}(?=(?:(?:[^"]*"){2})*[^"]*$)`)
  return str.split(re);
};

const delimitter = (string) => {
  let newString = partial + string;
  if (!newString.includes(options.lineEnd)) {
    // no line end
    partial = newString;
    data = '';
  } else if (newString[newString.length - 1] !== options.lineEnd) {
    // last char is not line end
    const lastIndexOfLineEnd = newString.lastIndexOf(options.lineEnd);
    const stringArray = newString.split('');
    partial = stringArray.splice(lastIndexOfLineEnd + 1).join('');
    data = stringArray.join('');
  } else {
    // last char is line end
    data = newString;
    partial = '';
  }
  const dArray = data.match(/"[^"]*"|.+/g);
  let d = [];
  if (dArray) {
    for (let i of dArray) {
      d.push(splitByDelim(i));
    }
  } else {
    partial = data.length === 0 ? partial : data;
  }
  return d.length !== 0 ? d : '';
};
const CSVParser = new Transform({
  readableObjectMode: true,
  transform(chunk, encoding, callback) {
    const a = delimitter(chunk.toString());
    if (a !== '') this.push(a);
    callback();
  },
});

CSVParser._flush = function (callback) {
  if (partial.length === 0) {
    return callback();
  } else {
    this.push(delimitter(options.lineEnd));
    return callback();
  }
};




const readable = fs.createReadStream('sample.csv', { highWaterMark: 5 });

readable
  .pipe(CSVParser)
  .on('data', function (data) {
    console.log(data, '--actual');
  })
  .on('error', function (error) {
    console.error(error, '--error');
  })
  .on('end', function () {
    console.error('--end');
  });
