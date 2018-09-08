var base64ciphertextFromPython = "DGUHm75vU577fLAJOtgz1axyb4ZdQLLerA+PAK2qQuk=";
var ciphertext = CryptoJS.enc.Base64.parse(base64ciphertextFromPython);

// Split iv and ciphertext
var iv = ciphertext.clone();
iv.sigBytes = 16;
iv.clamp();
ciphertext.words.splice(0, 4); // delete 4 words = 16 bytes
ciphertext.sigBytes -= 16;

var key = CryptoJS.enc.Utf8.parse("1234567890123456");

// Decryption
var decrypted = CryptoJS.AES.decrypt({ ciphertext: ciphertext }, key, {
  iv: iv,
  mode: CryptoJS.mode.CFB
});
console.log(decrypted.toString(CryptoJS.enc.Utf8));
