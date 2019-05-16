export function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = e => reject(e);
    reader.readAsDataURL(file);
  });
}

export const fileTypeOf = file =>
  new Promise((resolve, reject) => {
    const blob = file;
    const fileReader = new FileReader();
    fileReader.onloadend = e => {
      const arr = new Uint8Array(e.target.result).subarray(0, 4);
      let header = '';
      arr.forEach(v => {
        header += v.toString(16);
      });

      switch (header) {
        case '89504e47':
          resolve('image/png');
          break;
        case '47494638':
          resolve('image/gif');
          break;
        case 'ffd8ffe0':
        case 'ffd8ffe1':
        case 'ffd8ffe2':
          resolve('image/jpeg');
          break;
        case '25504446':
          resolve('application/pdf');
          break;
        default:
          reject({ errMessage: 'Unknow File Type' }); // Or you can use the blob.type as fallback
          break;
      }
    };
    fileReader.readAsArrayBuffer(blob);
  });

export const getFileTypeFromBlobURL = async url => {
  const res = await fetch(url);
  const blob = await res.blob();
  return fileTypeOf(blob);
};
