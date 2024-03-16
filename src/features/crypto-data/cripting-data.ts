import CryptoJS from 'crypto-js';

const myKey = process.env.TEMPUS_CRIPTO_KEY;

export function encryptData(data: string | undefined | null) {
  if (data && myKey) {
    return CryptoJS.AES.encrypt(data, myKey).toString();
  } else {
    return '';
  }
}

export function decryptData(encryptedData: string | undefined | null) {
  if (encryptedData && myKey) {
    const bytes = CryptoJS.AES.decrypt(encryptedData, myKey);
    return bytes.toString(CryptoJS.enc.Utf8);
  } else {
    return '';
  }
}
