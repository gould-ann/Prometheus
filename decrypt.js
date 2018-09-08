console.log("got here");

var base64ciphertextFromPython = "DGUHm75vU577fLAJOtgz1axyb4ZdQLLerA+PAK2qQuk=";
var ciphertext = CryptoJS.enc.Base64.parse(base64ciphertextFromPython);

// Split iv and ciphertext
var ive = ciphertext.clone();
ive.sigBytes = 16;
ive.clamp();
//could be a math issue potentially here
ciphertext.words.splice(0, 4); // delete 4 words = 16 bytes
ciphertext.sigBytes -= 16;
//to here as well 
var key = CryptoJS.enc.Utf8.parse("1234567890123456");

// Decryption
//look into this from here
var decrypted = CryptoJS.AES.decrypt({ ciphertext: ciphertext}, key, {
  iv: ive,
  mode: CryptoJS.mode.CFB
});
//to here
console.log(decrypted.toString(CryptoJS.enc.Utf8));
