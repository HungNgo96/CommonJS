import axios from 'axios';
import * as localStoragee from './../commons/ExpiryLocalStorage';
import * as Enum from './../constants/Enum';
import * as toast from '../helpers/toastHelper';

const CancelToken = axios.CancelToken;
const source = CancelToken.source();
source.cancel('Operation canceled by the user11122.');//show erros
axios.get('https://api.github.com/users/barbier',{
 //cancelToken: source.token 
  } )
  .then(function(response){
    console.log(response.data); // ex.: { user: 'Your User'}
    console.log(response.status); // ex.: 200
  });  
  
class AxiosService {
  constructor() {
    // axios.defaults.withCredentials = true;
    //let token = `VIyKq1FwaI9Eykk3RsWaassRuE5v88iabpPMHNKQS4IBSchrDxS6EJ5OB0XAB5wUojiYHoYrw8ClfzQ03Vo7TAzsfSDNTE3LhLXwkBoanodDpp6jYVyr6gYBcPowcpNHvH73d78d6nOjE7NXk6Cv5YRRdj4gFYv85WCHhxyvY0H3RgYirRhCwipwMye5E7TJvSzbsszL`;
    // const instance = axios.create({
    //   // baseURL: 'https://localhost:5001/',
    //   // baseURL:'http://net.anhduong.us/icon/',
    //   baseURL: Enum.URL_BACKEND,
    //   // headers: {
    //   //   Authorization: `Bearer ${Enum.TOKEN || ''}`,
    //   // },
    // });
    // // instance.defaults.headers.common['Authorization'] = localStorage.getItem(
    // //   'token'
    // // );
    // instance.defaults.headers.common['Authorization'] = `Bearer ${
    //   Enum.TOKEN || ''
    // }`;
    const instance = axios.create();
    instance.defaults.withCredentials = true;
    instance.interceptors.request.use(
      async (config) => {
        const token = localStorage.getItem('token');
        const data = JSON.parse(token);
        const value = data ? data.value : '';

        config.baseURL = Enum.URL_API;
        config.headers = {
          Authorization: `Bearer ${value}`,
      
        };
        return config;
      },
      (error) => {
        Promise.reject(error);
      }
    );

    // Response interceptor for API calls
    instance.interceptors.response.use(
      (response) => {
        const flat = localStoragee.getItem('flatRefresh');
        if (parseInt(flat) === 0) {
          localStoragee.setItem('flatRefresh', 1);
        }
        return response;
      },
      async function (error) {
      
        const originalRequest = error.config;
        const flat = localStoragee.getItem('flatRefresh');
        if (error.response.status === 401 && !originalRequest._retry) {
          originalRequest._retry = true;
          if (parseInt(flat) === 1) {
            localStoragee.setItem('flatRefresh', 0);

            const access_token = await fetch(
              Enum.URL_API + 'Api/User/refresh-token/' + Enum.USERID,
              {
                method: 'POST',
                mode: 'cors',
                cache: 'no-cache',
                credentials: 'include',
                redirect: 'follow',
                referrer: 'no-referrer',
              }
            ).then((res) => res.json());
            const { jwtToken, message } = access_token;
            if (message === 'Invalid token') {
              localStorage.removeItem('zoneID');
              localStorage.removeItem('groupID');
              localStorage.removeItem('token');
              localStorage.removeItem('userID');
              localStorage.removeItem('flatRefresh');
              window.location.href = `${Enum.SUBDIRECTORY}/dang-nhap`;
              return;
            }
            axios.defaults.headers.common['Authorization'] =
              'Bearer ' + jwtToken;
            originalRequest.headers.Authorization = 'Bearer ' + jwtToken;
            localStorage.removeItem('token');
            localStoragee.setWithExpiry(
              'token',
              jwtToken || '',
              Enum.EXPIRY_LOGIN
            );
            toast.toastWarning('Hết phiên làm việc, mời bạn thao thác lại.');
            return instance(originalRequest);
          }
        }
        return Promise.reject(error);
      }
    );
    this.instance = instance;
  }

  get(url) {
    return this.instance.get(url);
  }

  post(url, body, callback = null) {
    return this.instance.post(url, body, callback);
  }

  put(url, body = null) {
    return this.instance.put(url, body);
  }

  delete(url) {
    return this.instance.delete(url);
  }

  postMultip(...axios) {
    return Promise.all(axios);
  }
  
  downloadFile(url, type, responseType) {
    return this.instance({
      url:url,
      method: type,
      responseType:responseType,// 'blob', // important
      headers: {
        Authorization: `Bearer ${localStoragee.getWithExpiry('token') || ''}`,
      },
    });
  }

  optionPut(url, body, options){
    return this.instance.put(url, body, options);
  }

}

export default new AxiosService();