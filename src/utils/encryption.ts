import Md5 from "js-md5";
import CryptoJS from "crypto-js";

const SECRET_KEY = CryptoJS.enc.Utf8.parse("123456789abcdefg"); // 十六位十六进制数作为密钥
const SECRET_IV = CryptoJS.enc.Utf8.parse("abcdefg123456789");

export function encryptAes(word) {
  const srcs = CryptoJS.enc.Utf8.parse(word);
  const encrypted = CryptoJS.AES.encrypt(srcs, SECRET_KEY, {
    iv: SECRET_IV,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7
  });
  return encrypted.ciphertext.toString();
}

export function decryptAes(word) {
  const encryptedHexStr = CryptoJS.enc.Hex.parse(word);
  const srcs = CryptoJS.enc.Base64.stringify(encryptedHexStr);
  const decrypt = CryptoJS.AES.decrypt(srcs, SECRET_KEY, {
    iv: SECRET_IV,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7
  });
  const decryptedStr = decrypt.toString(CryptoJS.enc.Utf8);
  return decryptedStr.toString();
}

/**
 * md5加密
 * @param str
 * @returns
 */
export function md5(str) {
  return Md5(str);
}
