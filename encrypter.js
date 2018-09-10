var aesjs = require('aes-js');

var text = '';

// print process.argv
process.argv.forEach(function (val, index, array) {
  if(index >= 2)
  	text += val;
});

var key = aesjs.utils.utf8.toBytes("passwordpassword");

// Convert text to bytes

var textBytes = aesjs.utils.utf8.toBytes(text);

// The counter is optional, and if omitted will begin at 1
var aesCtr = new aesjs.ModeOfOperation.ctr(key, new aesjs.Counter(5));
var encryptedBytes = aesCtr.encrypt(textBytes);

// To print or store the binary data, you may convert it to hex
var encryptedHex = aesjs.utils.hex.fromBytes(encryptedBytes);
console.log(encryptedHex);