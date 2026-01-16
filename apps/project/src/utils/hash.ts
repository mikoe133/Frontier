import * as bcrypt from 'bcryptjs';
import CryptoJS from 'crypto-js';

// 生成哈希（用于简单哈希）
export const hash = (str: string) => {
  return CryptoJS.SHA256(str).toString(CryptoJS.enc.Hex);
};




// 生成强哈希（bcryptjs用于注册/存储密码）
export const hashStr = async (str: string, saltRounds: number = 12): Promise<string> => {
  return await bcrypt.hash(str, saltRounds);
};

// 验证强哈希（bcryptjs用于登录时比对）
export const verifyHash = async (plainStr: string, hashedStr: string): Promise<boolean> => {
  return await bcrypt.compare(plainStr, hashedStr);
};

// const password = "mySecretPassword123";
// const hashedPassword = await hashStr(password); // 默认 12 轮 salt
// console.log(hashedPassword); 
// const userInput = "mySecretPassword123";
// const isValid = await verifyHash(userInput, hashedPassword);
// console.log(isValid); // true 或 false