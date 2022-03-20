
import { getHashtagsArray, isEscapeKey } from './util.js';
import { validateHashtagsText, validateNumberOfHashtags, validateSimilarHashtags } from './validators.js';
import { loadImageToUploadOverlay } from './uploader.js';

const uploadedImage = document.querySelector('.img-upload__input');
const uploadPreview = document.querySelector('.img-upload__preview');
const previewImage = uploadPreview.querySelector('img');
const effectsImagesList = document.querySelectorAll('.effects__preview');
const imgUploadOverlay = document.querySelector('.img-upload__overlay');
const imgUploadCancelButton = document.querySelector('.img-upload__cancel');
const mainWindow = document.querySelector('body');
const hashtagsInput = document.querySelector('.text__hashtags');
const decriptionInput = document.querySelector('.text__description');


imgUploadOverlay.show = function () {
  this.classList.remove('hidden');
  mainWindow.classList.add('modal-open');
  document.addEventListener('keydown', uploadClosebyKey);
  imgUploadCancelButton.addEventListener('click' , uploadClose);
};
imgUploadOverlay.hide = function () {
  this.classList.add('hidden');
  mainWindow.classList.remove('modal-open');
  uploadedImage.value = '';
  document.removeEventListener('keydown', uploadClosebyKey);
  imgUploadCancelButton.removeEventListener('click' , uploadClose);
};

hashtagsInput.addEventListener('keyup', () => {
  const hashtags = getHashtagsArray(hashtagsInput.value);
  switch (true) {
    case (hashtagsInput.value.length === 0):
      hashtagsInput.setCustomValidity('');
      break;
    case (validateHashtagsText(hashtags)):
      hashtagsInput.setCustomValidity('Неправильный ввод хэштега');
      break;
    case (!validateSimilarHashtags(hashtags)):
      hashtagsInput.setCustomValidity('Нельзя вводить одинаковые хэштеги');
      break;
    case (validateNumberOfHashtags(hashtags)):
      hashtagsInput.setCustomValidity('Не больше пяти хэштегов');
      break;
    default:
      hashtagsInput.setCustomValidity('');
  }

});

const checkFocus = () => document.activeElement !== hashtagsInput && document.activeElement !== decriptionInput;

function uploadClosebyKey  (evt) {
  if (isEscapeKey(evt)&&checkFocus()) {
    imgUploadOverlay.hide();
  }
}
function uploadClose () {
  imgUploadOverlay.hide();
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

export {imgUploadOverlay};
