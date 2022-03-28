import { previewImage } from './forms.js';
import { chrome, sepia, marvin, phobos, heat } from './data.js';
import { imgUploadEffectLevel } from './forms.js';
const sliderElement = document.querySelector('.effect-level__slider');
const effectsList = document.querySelectorAll('.effects__radio');
const effectLevelValue = document.querySelector('.effect-level__value');
const scaleSmallerButton = document.querySelector('.scale__control--smaller');
const scaleBiggerButton = document.querySelector('.scale__control--bigger');
const scaleControlValue = document.querySelector('.scale__control--value');
let scale = 1;

scaleBiggerButton.addEventListener('click', () => {
  if(scale < 1){
    scale +=0.25;
    scaleControlValue.value = `${scale*100}%`;
    previewImage.style.transform = `scale(${scale})`;
  }
});

scaleSmallerButton.addEventListener('click', () => {
  if(scale > 0.25){
    scale -=0.25;
    scaleControlValue.value = `${scale*100 }%`;
    previewImage.style.transform = `scale(${scale})`;
  }
});

noUiSlider.create(sliderElement, {
  range: {
    min: 0,
    max: 100,
  },
  start: 0,
  step: 1,
  connect: 'lower',
});
let contentBefore;
let contentAfter;
sliderElement.noUiSlider.on('update', () => {
  previewImage.style.filter = contentBefore + sliderElement.noUiSlider.get() + contentAfter;
  effectLevelValue.value = sliderElement.noUiSlider.get();
});

for(let i = 0; i < effectsList.length; i++){
  effectsList[i].addEventListener('click', (evt) => {
    switch(true){
      case (evt.target.id === 'effect-none'):
        previewImage.style.filter = 'none';
        imgUploadEffectLevel.classList.add('hidden');
        break;
      case (evt.target.id === 'effect-chrome'):
        previewImage.style.filter = 'none';
        contentBefore = 'grayscale(';
        contentAfter = ')';
        sliderElement.noUiSlider.updateOptions(chrome);
        imgUploadEffectLevel.classList.remove('hidden');
        break;
      case (evt.target.id === 'effect-sepia'):
        previewImage.style.filter = 'none';
        contentBefore = 'sepia(';
        contentAfter = ')';
        sliderElement.noUiSlider.updateOptions(sepia);
        imgUploadEffectLevel.classList.remove('hidden');
        break;
      case (evt.target.id === 'effect-marvin'):
        previewImage.style.filter = 'none';
        contentBefore = 'invert(';
        contentAfter = '%)';
        sliderElement.noUiSlider.updateOptions(marvin);
        imgUploadEffectLevel.classList.remove('hidden');
        break;
      case (evt.target.id === 'effect-phobos'):
        previewImage.style.filter = 'none';
        contentBefore = 'blur(';
        contentAfter = 'px)';
        sliderElement.noUiSlider.updateOptions(phobos);
        imgUploadEffectLevel.classList.remove('hidden');
        break;
      case (evt.target.id === 'effect-heat'):
        previewImage.style.filter = 'none';
        contentBefore = 'brightness(';
        contentAfter = ')';
        sliderElement.noUiSlider.updateOptions(heat);
        imgUploadEffectLevel.classList.remove('hidden');
        break;
    }
  });
}


