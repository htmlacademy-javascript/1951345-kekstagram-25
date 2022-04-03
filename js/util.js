import {REG_EXP_FOR_HASHTAGS_ARRAY} from './data.js';
import { returnToDefault } from './photo_filter.js';
import { imgUploadOverlay } from './forms.js';

const mainWindow = document.querySelector('body');

const getRandomIntegerNumber = (startNumber, lastNumber) => {
  if (startNumber < 0) {
    throw new Error('Ошибка в функции генерации случайного числа: в параметрах присутствуют числа ниже нуля');
  }
  if (startNumber >= lastNumber) {
    throw new Error('Ошибка в функции генерации случайного числа: в параметрах начальное число больше конечного');
  }
  const auxStartNumber = Math.ceil(startNumber);
  const auxLastNumber = Math.floor(lastNumber) + 1;
  return Math.floor(Math.random() * (auxLastNumber - auxStartNumber)) + auxStartNumber;
};

const checkStringLength = (currentString, maxLength) => currentString.length <= maxLength;

function getHashtagsArray (hashtagsString) {
  return hashtagsString.split(REG_EXP_FOR_HASHTAGS_ARRAY);
}
const getRandomArrayElement = (array) => array[getRandomIntegerNumber(0, array.length - 1)];

const isEscapeKey = (evt) => evt.key === 'Escape';

const getDataError = (errorText) => {
  const errorMessage = document.createElement('div');
  errorMessage.classList.add('getData__error');
  errorMessage.textContent = errorText;
  document.body.append(errorMessage);
  setTimeout(() => errorMessage.remove(), 10000);
};
const closeMessage = (message) => {
  message.remove();
  returnToDefault();
};

const showSuccessMessage = () => {
  const messageTemplate = document.querySelector('#success').content;
  const successMessage = messageTemplate.cloneNode(true);
  const successButton = successMessage.querySelector('.success__button');
  document.body.append(successMessage);
  const successMessageWrapper = document.querySelector('.success');
  const successMessageContainer = document.querySelector('.success__inner');
  successButton.addEventListener('click', () => closeMessage(successMessageWrapper));
  successMessageWrapper.addEventListener('click', (evt) => {
    if(evt.target !== successMessageContainer){
      closeMessage(successMessageWrapper);
    }
  });
  imgUploadOverlay.classList.add('hidden');
  mainWindow.classList.remove('modal-open');
};

const showErrorMessage = () => {
  const messageTemplate = document.querySelector('#error').content;
  const errorMessage = messageTemplate.cloneNode(true);
  const errorButton = errorMessage.querySelector('.error__button');
  document.body.append(errorMessage);
  const errorMessageWrapper = document.querySelector('.error');
  const errorMessageContainer = document.querySelector('.error__inner');
  errorButton.addEventListener('click', () => errorMessageWrapper.remove());
  errorMessageWrapper.addEventListener('click', (evt) => {
    if(evt.target !== errorMessageContainer){
      closeMessage(errorMessageWrapper);
    }
  });
  imgUploadOverlay.classList.add('hidden');
  mainWindow.classList.remove('modal-open');
};

export {
  getRandomIntegerNumber,
  checkStringLength,
  getRandomArrayElement,
  getHashtagsArray,
  isEscapeKey, getDataError,
  showSuccessMessage,
  showErrorMessage
};
