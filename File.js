import axios from 'axios';
import * as localStorage from './../commons/ExpiryLocalStorage';
import * as Enum from './../constants/Enum';
import axiosService from './../commons/axiosService';

export const isImage = (filename) => {
  var ext = filename.type;
  let array = ['image/jpg', 'image/gif', 'image/bmp', 'image/png'];
  return array.includes(ext);
};

export const isVideo = (filename) => {
  var ext = filename.type;
  let array = ['video/m4v', 'video/avi', 'video/mpg', 'video/mp4'];
  return array.includes(ext);
};

export const randomString = (length = 7) => {
  var result = '';
  var characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};

export const getParameterByName = (name, url) => {
  if (!url) url = window.location.href;
  name = name.replace(/[[\]]/g, '\\$&');
  var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
    results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, ' '));
};

export const toDataURL = (url) =>
  fetch(url)
    .then((response) => response.blob())
    .then(
      (blob) =>
        new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.onloadend = () => resolve(reader.result);
          reader.onerror = reject;
          reader.readAsDataURL(blob);
        })
    );

export const options = {
  onUploadProgress: (progressEvent) => {
    const { loaded, total } = progressEvent;
    let percent = Math.floor((loaded * 100) / total);
    console.log(`${loaded} kb of ${total} kb | ${percent}`);
  },
};

export const dowloadFileFromServerPublic = (url, name) => {
  setTimeout(() => {
    axios({
      url: url,
      method: 'GET',
      responseType: 'blob', // important
    }).then((response) => {
      // const url = window.URL.createObjectURL(new Blob([response.data]));
      const url = window.URL.createObjectURL(response.data);
      const link = document.createElement('a');

      link.href = url;
      link.setAttribute('download', name);
      document.body.appendChild(link);
      link.click(function (res) {});
      document.body.removeChild(link);
    });
  }, 1000);
};

export const convertBlobsToFile = async (url) => {
  await axios({
    url: url,
    method: 'GET',
    responseType: 'blob', // important
  }).then((response) => {
    const typeImage = response.data.type;
    //  new File(new Blob([response.data]), 'test file', { lastModified: new Date().getTime() , type: 'image/png'})
    return new window.File([response.data], randomString(), {
      lastModified: new Date().getTime(),
      type: typeImage,
    });
  });
};

export const dowloadFileFromServerBK = (url, name) => {
  const nameFile = {
    folderName: '',
    fileUrl: url,
  };
  setTimeout(() => {
    axiosService
      .axiosDefault({
        url: `${Enum.URL_API}Api/Download/getFileFullUrl`,
        method: 'POST',
        responseType: 'blob', // important
        headers: {
          Authorization: `Bearer ${localStorage.getWithExpiry('token') || ''}`,
        },
        data: nameFile,
      })
      .then((response) => {
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', name);
        document.body.appendChild(link);
        link.click(function (res) {
          console.log('res test');
        });
        document.body.removeChild(link);
      });
  }, 1000);
};

export const dowloadFileFromServerPrivate = (url, name) => {
  let body = {
    url: url,
    name: '1',
  };
  const urlApi = `Api/Download/private/getFileFullUrl?FolderName=${body.name}&FileUrl=${body.url}`;
  setTimeout(() => {
    axiosService.downloadFile(urlApi, 'POST', 'blob').then((response) => {
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', name);
      document.body.appendChild(link);
      link.click(function (res) {
        console.log('res test');
      });
      document.body.removeChild(link);
    });
  }, 1000);
};

export const validThumbnail = (file) => {
  const fileTypes = ['image/jpeg', 'image/jpg', 'image/png'];
  return fileTypes.includes(file.type);
};

export const checkFileSize = (file, size = 5) => {
  const fileSize = Math.round(file.size / 1024);
  if (fileSize > size * 1024) return false;
  return true;
};

const toBase64 = file => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
});

async function Main() {
   const file = document.querySelector('#myfile').files[0];
   console.log(await toBase64(file));
}

