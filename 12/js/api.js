import { getDataError } from './util.js';

const getData = (onSuccess) => {
  fetch('https://25.javascript.pages.academy/kekstagram/data')
    .then((response) => {
      if(response.ok) {
        return response.json();
      } else {
        getDataError('Что-то пошло не так, по крайней мере так ответил сервер');
      }
    })
    .catch(() => {
      getDataError('Что-то пошло не так, сервер ничего не отвечает');
    })
    .then((data) => {
      onSuccess(data);
    });

};

const sendData = (onSuccess, onFail, body) => {
  fetch(
    'https://25.javascript.pages.academy/kekstagram',
    {
      method: 'POST',
      body,
    },
  )
    .then((response) => {
      if (response.ok) {
        onSuccess();
      } else {
        onFail('Не удалось отправить форму. Попробуйте еще раз');
      }
    })
    .catch(() => {
      onFail('Не удалось отправить форму. Попробуйте еще раз');
    });
};
export { getData, sendData };
