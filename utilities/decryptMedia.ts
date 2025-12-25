import * as crypto from "crypto-es";

export function decryptMedia(encryptedUrl: string) {
  const key = crypto.Utf8.parse("38346591");

  const decrypted = crypto.DES.decrypt(
    {
      ciphertext: crypto.Base64.parse(encryptedUrl),
    },
    key,
    {
      mode: crypto.ECB,
      padding: crypto.Pkcs7,
    }
  );

  return decrypted.toString(crypto.Utf8);
}
