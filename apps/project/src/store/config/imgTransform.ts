// src/store/config/imgTransform.ts
import { createTransform } from 'redux-persist';

interface ImageEntry {
  id: string;
  name: string;
  type: string;
  size: number;
  lastModified: number;
  data: ArrayBuffer;
}

interface ImgsState {
  images: Record<string, ImageEntry>;
  showingimgid: string;
}

// 将 ArrayBuffer 转为可序列化的格式
const arrayBufferToSerializable = (buffer: ArrayBuffer): { type: 'Buffer'; data: number[] } => {
  console.log('arrayBuffer转换为了Uint8Array');

  return {
    type: 'Buffer',
    data: Array.from(new Uint8Array(buffer))
  };
};

const serializableToArrayBuffer = (serializable: { type: 'Buffer'; data: number[] }): ArrayBuffer => {
  if (serializable.type === 'Buffer' && Array.isArray(serializable.data)) {
    console.log('Uint8Array转换为了ArrayBuffer');
    return new Uint8Array(serializable.data).buffer;
  }
  return new ArrayBuffer(0);
};

export const imgTransform = createTransform(
  // outbound: state → storage (保存时)
  (inboundState: ImgsState, key) => {
    console.log('Transform outbound - key:', key, 'state:', inboundState);

    if (key === 'images') {
      const transformedImages: Record<string, any> = {};
      console.log('开始转换images中的ArrayBuffer', inboundState);

      // 转换所有图片的 ArrayBuffer
      for (const [id, img] of Object.entries(inboundState)) {
        transformedImages[id] = {
          ...img,
          data: arrayBufferToSerializable(img.data),
        };
      }
      console.log('转换完成', transformedImages, '返回值', {
        ...inboundState,
        images: transformedImages,
      });

      return {
        ...inboundState,
        images: transformedImages,
      };
    }
    return inboundState;
  },
  // inbound: storage → state (读取时)
  (outboundState: ImgsState, key) => {
    console.log('Transform inbound - key:', key, 'state:', outboundState);

    if (key === 'images') {
      const restoredImages: Record<string, any> = {};
      console.log('开始转换images中的ArrayBuffer');

      // 恢复所有图片的 ArrayBuffer
      for (const [id, img] of Object.entries(outboundState)) {
        const imgData = img as any;
        restoredImages[id] = {
          ...imgData,
          data: serializableToArrayBuffer(imgData.data),
        };
      }

      return {
        ...outboundState,
        images: restoredImages,
      };
    }
    return outboundState;
  }
  // 移除这里的 whitelist 配置，在 persistConfig 中配置
);

export default imgTransform;