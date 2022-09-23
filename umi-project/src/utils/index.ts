import Compressor from 'compressorjs';
import type { ImgType } from './types';

export const IMG_TYPE: Record<string, ImgType> = {
  SVG: 'image/svg+xml',
};

/**
 * 读取文件的内容并返回 text
 * @param {File} file
 * @returns {Promise}
 */
export async function readFileAsText(file: File) {
  return new Promise<string>((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      const input = reader.result as string;
      resolve(input);
    };
    reader.onerror = reject;
    reader.onabort = reject;
    reader.readAsText(file);
  });
}
/**
 * 读取文件的内容并返回
 * @param {File} file
 * @returns {Promise}
 */
export async function readFileAsDataURL(file: File) {
  return new Promise<string>((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      const input = reader.result as string;
      resolve(input);
    };
    reader.onerror = reject;
    reader.onabort = reject;
    reader.readAsDataURL(file);
  });
}

/**
 * 优化 svg 文件并返回
 * @param {File} file
 * @returns {Promise}
 */
async function optSvgImage(file: File) {
  const svgString = await readFileAsText(file);
  const { optimize } = require('svgo');
  const result = optimize(svgString, {
    path: file.name,
    multipass: true,
  });
  return new File([result.data], file.name, {
    type: file.type,
  });
}

/**
 * 优化图片文件并返回
 * @param {File} file
 * @returns {Promise}
 */
async function optGeneralImage(file: File) {
  return new Promise((resolve, reject) => {
    let quality = null;
    if (file.size < 1024 * 500) {
      // 500kb 直接返回源文件
      resolve(file);
      return;
    } else if (file.size < 1024 * 1024 * 2) {
      // 2Mb
      quality = 0.92;
    } else if (file.size < 1024 * 1024 * 5) {
      // 5Mb
      quality = 0.8;
    } else if (file.size < 1024 * 1024 * 10) {
      // 10Mb
      quality = 0.7;
    } else {
      quality = 0.6;
    }
    new Compressor(file, {
      quality,
      maxWidth: 4096,
      success: resolve,
      error: reject,
    });
  });
}

// 图片类型 reg
const REGEXP_IMAGE_TYPE = /^image\/.+$/;
// 是否是图片类型
const isImageType = (fileType: string) => REGEXP_IMAGE_TYPE.test(fileType);

/**
 * 优化图片大小并返回
 * @param {File} file
 * @returns
 */
async function optimizeImageFile(file: File) {
  if (!isImageType(file?.type)) {
    console.error('传参非图片类型文件！');
    return file;
  }

  if (file.type === IMG_TYPE.SVG) {
    return optSvgImage(file);
  }

  return optGeneralImage(file);
}

export async function uploadFile(file: File) {
  console.log('file: ', file);
  console.time('优化图片用时');
  const optFile = (await optimizeImageFile(file)) as File;
  console.timeEnd('优化图片用时');

  let fileText;
  let optFileText;
  if (file.type === IMG_TYPE.SVG) {
    fileText = await readFileAsText(file);
    optFileText = await readFileAsText(optFile);
  } else {
    fileText = await readFileAsDataURL(file);
    optFileText = await readFileAsDataURL(optFile);
  }
  // console.log('optFile: ', optFile, optFile.size / 1024 / 1024);
  return { optFile, optFileText, file, fileText };
}

export function storageFormat(size: number) {
  if (typeof size !== 'number') return size;
  if (size > 1024 * 1024) {
    return (size / 1024 / 1024).toFixed(2) + ' Mb';
  } else if (size > 1024) {
    return (size / 1024).toFixed(2) + ' kb';
  } else {
    return `${size} b`;
  }
}
