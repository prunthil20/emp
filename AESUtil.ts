import * as cryptoJS from 'crypto-js';

export class AESUtil {
  ENCRYPT_KEY = 'ThisIsEmployeeManagementSystem';
  _keySize = 256;
  _ivSize = 128;
  _iterationCount = 1989;
  constructor() {
    this._keySize = 256;
    this._ivSize = 128;
    this._iterationCount = 1989;
  }
  get keySize() {
    return this._keySize;
  }
  set keySize(value) {
    this._keySize = value;
  }
  get iterationCount() {
    return this._iterationCount;
  }
  set iterationCount(value) {
    this._iterationCount = value;
  }
  generateKey(salt, passPhrase) {
    return cryptoJS.PBKDF2(passPhrase, cryptoJS.enc.Hex.parse(salt), {
      keySize: this.keySize / 32,
      iterations: this._iterationCount,
    });
  }
  encryptWithIvSalt(salt, iv, passPhrase, plainText) {
    const key = this.generateKey(salt, passPhrase);
    const encrypted = cryptoJS.AES.encrypt(plainText, key, {
      iv: cryptoJS.enc.Hex.parse(iv),
    });
    return encrypted.ciphertext.toString(cryptoJS.enc.Base64);
  }
  decryptWithIvSalt(salt, iv, passPhrase, cipherText) {
    const key = this.generateKey(salt, passPhrase);
    const cipherParams = cryptoJS.lib.CipherParams.create({
      ciphertext: cryptoJS.enc.Base64.parse(cipherText),
    });
    const decrypted = cryptoJS.AES.decrypt(cipherParams, key, {
      iv: cryptoJS.enc.Hex.parse(iv),
    });
    return decrypted.toString(cryptoJS.enc.Utf8);
  }
  encrypt(plainText) {
    const iv = cryptoJS.lib.WordArray.random(this._ivSize / 8).toString(
      cryptoJS.enc.Hex
    );
    const salt = cryptoJS.lib.WordArray.random(this.keySize / 8).toString(
      cryptoJS.enc.Hex
    );
    const ciphertext = this.encryptWithIvSalt(
      salt,
      iv,
      this.ENCRYPT_KEY,
      plainText
    );
    return salt + iv + ciphertext;
  }
  decrypt(cipherText) {
    const ivLength = this._ivSize / 4;
    const saltLength = this.keySize / 4;
    const salt = cipherText.substr(0, saltLength);
    const iv = cipherText.substr(saltLength, ivLength);
    const encrypted = cipherText.substring(ivLength + saltLength);
    return this.decryptWithIvSalt(salt, iv, this.ENCRYPT_KEY, encrypted);
  }
}

export const aesUtil = new AESUtil();