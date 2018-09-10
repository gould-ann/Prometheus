import base64

from Crypto import Random
from Crypto.Cipher import AES
BLOCK_SIZE = 16
def pad(data):
    length = 16 - (len(data) % 16)
    return data + chr(length)*length

def unpad(data):
    return data[:-ord(data[-1])]

def encrypt(message, passphrase):
    IV = Random.new().read(BLOCK_SIZE)
    aes = AES.new(passphrase, AES.MODE_CFB, IV, segment_size=128)
    return base64.b64encode(IV + aes.encrypt(pad(message)))

def decrypt(encrypted, passphrase):
    encrypted = base64.b64decode(encrypted)
    IV = encrypted[:16]
    aes = AES.new(passphrase, AES.MODE_CFB, IV, segment_size=128)
    return unpad(aes.decrypt(encrypted[BLOCK_SIZE:]))

e = encrypt("Hello world!", "passwordpassword")
print e
print decrypt("746a4d7bc2abf080fe8026e2095bc60fb10c37ad9fee474239240c10ca08385e694beb4406cb29d23603cae16c533d2208e5609657d2aa5f06a4d484a0e5ec40", "passwordpassword")