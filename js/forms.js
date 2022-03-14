
import { checkStringLength } from './util.js';
const uploadedImage = document.querySelector('.img-upload__input');
const uploadPreview = document.querySelector('.img-upload__preview');
const previewImage = uploadPreview.querySelector('img');
const effectsImagesList = document.querySelectorAll('.effects__preview');
const imgUploadOverlay = document.querySelector('.img-upload__overlay');
const imgUploadCancelButton = document.querySelector('.img-upload__cancel');
const mainWindow = document.querySelector('body');
const hashtags = document.querySelector('.text__hashtags');
const submitButton = document.querySelector('.img-upload__submit');
const hashtagError =document.querySelector('.error__hashtags');
const descriptionError = document.querySelector('.error_description');
const textDescription = document.querySelector('.text__description');

textDescription.addEventListener('change', ()=>{
  if(checkStringLength(textDescription.value, 140)){
    descriptionError.style.display = 'block';
    descriptionError.textContent = 'Длина описания не может быть больше 140 символов';
  }
});

hashtags.addEventListener('keyup', ()=>{
  const re = /^#[A-Za-zА-Яа-яЁё0-9]{1,19}$/; //регулярка для валидации хэштегов
  const hashtagsSplit = hashtags.value.split(' ');
  if (hashtags.value != ''){
    for (let i = 0; i < hashtagsSplit.length; i++){
      if (!re.test(hashtagsSplit[i])){
        submitButton.setAttribute('disabled', 'disabled');
        hashtagError.style.display = 'block';
        hashtagError.textContent = 'Неправильно введен хэштэг или после хэштэга введен пробел';
        throw new Error ('Хэштеги надо вводить правильно');
      }
      for (let j = 0; j < hashtagsSplit.length; j++){
        if(hashtagsSplit[i].toUpperCase() == hashtagsSplit[j].toUpperCase() && i != j){
          submitButton.setAttribute('disabled', 'disabled');
          hashtagError.style.display = 'block';
          hashtagError.textContent = 'Нельзя вводить одинаковые хэштеги';
          throw new Error ('Нельзя вводить одинаковые хэштеги');
        }
      }
    }
  }
  if (hashtagsSplit.length > 5){
    submitButton.setAttribute('disabled', 'disabled');
    hashtagError.style.display = 'block';
    hashtagError.textContent = 'Нельзя вводить больше пяти хэштегов';
    throw new Error ('Не больше пяти хэштегов');
  }
  hashtagError.style.display = 'none';
  submitButton.removeAttribute('disabled', 'disabled');
});
const uploadClosebyKeyFunction = (evnt) => {
  if(evnt.key == 'Escape'){
    imgUploadOverlay.classList.add('hidden');
  }
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
    imgUploadOverlay.classList.remove('hidden');
    mainWindow.classList.add('modal-open');
  };
  fileReader.readAsDataURL(target.files[0]);
  document.addEventListener('keydown', (evnt) => {
    uploadClosebyKeyFunction(evnt)});
});

imgUploadCancelButton.addEventListener('click' , ()=> {
  imgUploadOverlay.classList.add('hidden');
  mainWindow.classList.remove('.modal-open');
});

