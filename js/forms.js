
import {  isEscapeKey } from './util.js';
import { loadImageToUploadOverlay } from './uploader.js';
import { validateHashtags } from './validators.js';
const uploadedImage = document.querySelector('.img-upload__input');
const uploadPreview = document.querySelector('.img-upload__preview');
const previewImage = uploadPreview.querySelector('img');
const effectsImagesList = document.querySelectorAll('.effects__preview');
const imgUploadOverlay = document.querySelector('.img-upload__overlay');
const imgUploadCancelButton = document.querySelector('.img-upload__cancel');
const mainWindow = document.querySelector('body');
const hashtagsInput = document.querySelector('.text__hashtags');
const decriptionInput = document.querySelector('.text__description');
const uploadForm = document.querySelector('.img-upload__form');

const pristine = new Pristine(uploadForm, {
  classTo: 'text__hashtags-wrapper',
  errorClass: 'form__item--invalid',
  successClass: 'form__item--valid',
  errorTextParent: 'text__hashtags-wrapper',
  errorTextTag: 'span',
  errorTextClass: 'form__error'
});

pristine.addValidator(
  hashtagsInput,
  validateHashtags,
  'Нарушены правила заполнения полей хэштега'
);

uploadForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  pristine.validate();
});

const onCancelBtnClick =  () => {
  imgUploadOverlay.classList.add('hidden');
  mainWindow.classList.remove('modal-open');
  uploadedImage.value = '';
  document.removeEventListener('keydown', onEscapeKeyup);
};

const showImgUploadOverlay =  () => {
  imgUploadOverlay.classList.remove('hidden');
  mainWindow.classList.add('modal-open');
  document.addEventListener('keydown', onEscapeKeyup);
  imgUploadCancelButton.addEventListener('click' , onCancelBtnClick);
};

const checkFocus = () => document.activeElement !== hashtagsInput && document.activeElement !== decriptionInput;

function onEscapeKeyup  (evt) {
  if (isEscapeKey(evt)&&checkFocus()) {
    onCancelBtnClick();
  }
}

uploadedImage.addEventListener('change', (evt) => {
  const target = evt.target;
  if (!FileReader) {
    throw new Error('Filereader недоступен');
  }
  if (!target.files.length) {
    throw new Error('Ничего не загружено');
  }
  const fileReader = new FileReader();
  fileReader.addEventListener('load', () => {
    loadImageToUploadOverlay(previewImage, fileReader, effectsImagesList);
  });
  fileReader.readAsDataURL(target.files[0]);
});

export {showImgUploadOverlay};
