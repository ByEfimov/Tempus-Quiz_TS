import CryptoJS from 'crypto-js';

const myKey = process.env.NEXT_PUBLIC_TEMPUS_CRIPTO_KEY;

export function encryptData(data: string | undefined | null) {
  if (data && myKey) {
    const encrypted = CryptoJS.AES.encrypt(data, myKey).toString();
    return btoa(encrypted);
  } else {
    return '';
  }
}

export function decryptData(encryptedData: string | undefined | null | string[]) {
  if (encryptedData && myKey && typeof encryptedData === 'string') {
    const decoded = atob(encryptedData);
    const bytes = CryptoJS.AES.decrypt(decoded, myKey);
    return bytes.toString(CryptoJS.enc.Utf8);
  } else {
    return '';
  }
}
