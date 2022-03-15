
import { getHashtagsArray, isEscapeKey } from './util.js';
import { validateHashtagText, validateNumberOfHashtags, validateSimilarHashtags } from './validators.js';

const uploadedImage = document.querySelector('.img-upload__input');
const uploadPreview = document.querySelector('.img-upload__preview');
const previewImage = uploadPreview.querySelector('img');
const effectsImagesList = document.querySelectorAll('.effects__preview');
const imgUploadOverlay = document.querySelector('.img-upload__overlay');
const imgUploadCancelButton = document.querySelector('.img-upload__cancel');
const mainWindow = document.querySelector('body');
const hashtagsInput = document.querySelector('.text__hashtags');
const decriptionInput =document.querySelector('.text__description');

const toggleUploadedPreview = (option) => {
  if (option === 'show'){
    imgUploadOverlay.classList.remove('hidden');
    mainWindow.classList.add('modal-open');
  }else {
    imgUploadOverlay.classList.add('hidden');
    mainWindow.classList.remove('modal-open');
    uploadedImage.value = '';
  }
};

hashtagsInput.addEventListener('keyup', ()=>{
  const hashtags = getHashtagsArray(hashtagsInput.value);
  if (hashtagsInput.value){
    for (let i = 0; i < hashtags.length; i++){
      if (!validateHashtagText(hashtags[i])){
        hashtagsInput.setCustomValidity('Неправильный ввод хэштега');
        throw new Error ('Неправильный ввод хэштега');
      }
    }
    if (!validateSimilarHashtags(hashtags)){
      hashtagsInput.setCustomValidity('Нельзя вводить одинаковые хэштеги');
      throw new Error ('Нельзя вводить одинаковые хэштеги');
    }
    if (validateNumberOfHashtags(hashtags)){
      hashtagsInput.setCustomValidity('Не больше пяти хэштегов');
      throw new Error ('Не больше пяти хэштегов');
    }
  }
  hashtagsInput.setCustomValidity('');
});

function uploadClosebyKeyFunction  (evt) {
  if(isEscapeKey(evt)){
    toggleUploadedPreview('hide');
  }
}

imgUploadCancelButton.addEventListener('click' , ()=> {
  toggleUploadedPreview('hide');
});

hashtagsInput.onfocus = function () {
  document.removeEventListener('keydown', uploadClosebyKeyFunction);
};

hashtagsInput.onblur = function () {
  document.addEventListener('keydown', uploadClosebyKeyFunction);
};

decriptionInput.onfocus = function () {
  document.removeEventListener('keydown', uploadClosebyKeyFunction);
};

decriptionInput.onblur = function () {
  document.addEventListener('keydown', uploadClosebyKeyFunction);
};

uploadedImage.addEventListener('change', (evt)=> {
  const target = evt.target;
  if (!FileReader) {
    throw new Error('Filereader недоступен');

  }
  if (!target.files.length) {
    throw new Error('Ничего не загружено');
  }
  const fileReader = new FileReader();
  fileReader.onload = function() {
    previewImage.src = fileReader.result;
    for (let i = 0; i < effectsImagesList.length; i++){
      effectsImagesList[i].style.backgroundImage = `url("${fileReader.result }")`;
    }
    toggleUploadedPreview('show');
  };
  fileReader.readAsDataURL(target.files[0]);
  document.addEventListener('keydown', uploadClosebyKeyFunction);
});


