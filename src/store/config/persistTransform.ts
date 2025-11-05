// persistTransform.ts
import { createTransform } from "redux-persist";
import { strToU8, decompressSync, compressSync, strFromU8 } from "fflate";

const fflateTransform = createTransform(
  // onWrite: compress
  (inboundState) => {
    const json = JSON.stringify(inboundState);
    const compressed = compressSync(strToU8(json));
    return Array.from(compressed); // 存为 number[]
  },

  // onRead: decompress
  (outboundState) => {
    // 防御：检查状态是否存在且有效
    if (!outboundState || !Array.isArray(outboundState)) {
      console.warn("Invalid compressed state:", outboundState);
      return outboundState; // 可能是初始状态或错误
    }

    try {
      const compressed = new Uint8Array(outboundState);
      const decompressed = decompressSync(compressed);
      const json = strFromU8(decompressed);
      return JSON.parse(json);
    } catch (error) {
      console.error("Failed to decompress or parse state:", error);
      // 返回安全的默认值（如空对象），避免崩溃
      return {}; // 或者返回上一层的默认 initialState
    }
  }
);

export default fflateTransform;